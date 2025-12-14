import { createContext, useContext, useRef, useState } from 'react';
import type {
  ComponentPropsWithoutRef,
  ElementType,
  FocusEvent,
  KeyboardEvent,
  MouseEvent,
  ReactNode,
  RefObject,
} from 'react';

export interface RovingTabindexItem {
  id: string;
  element: HTMLElement;
}

export interface RovingTabindexContext {
  focusableId: string | null;
  setFocusableId: (id: string) => void;
  onShiftTab: () => void;
  getOrderedItems: () => RovingTabindexItem[];
  elements: RefObject<Map<string, HTMLElement>>;
}

const RovingTabindexContext = createContext<RovingTabindexContext | undefined>(undefined);

export function useRovingTabindex(id: string) {
  const ctx = useContext(RovingTabindexContext);

  if (ctx === undefined) {
    throw new Error('useRovingTabindex must be used within a RovingTabindexRoot');
  }

  const { elements, getOrderedItems, setFocusableId, focusableId, onShiftTab } = ctx;

  function scrollItemIntoViewRespectingSticky(element: HTMLElement) {
    const scrollContainer = element.closest('[data-tree-scroll-container]');
    if (!(scrollContainer instanceof HTMLElement)) return;

    const itemRect = element.getBoundingClientRect();
    const containerRect = scrollContainer.getBoundingClientRect();

    const depthAttribute = element.getAttribute('data-tree-node-depth');
    const depth = depthAttribute != null && depthAttribute !== '' ? Number(depthAttribute) : 0;
    const rowHeightPx = 44; // keep in sync with tree-node.tsx
    const stickyOffset = depth * rowHeightPx;

    const topVisible = containerRect.top + stickyOffset;
    const bottomVisible = containerRect.bottom;

    if (itemRect.top < topVisible) {
      scrollContainer.scrollTop += itemRect.top - topVisible;
    } else if (itemRect.bottom > bottomVisible) {
      scrollContainer.scrollTop += itemRect.bottom - bottomVisible;
    }
  }

  return {
    getOrderedItems,
    isFocusable: focusableId === id,
    getRovingProps: <T extends ElementType>(
      props: ComponentPropsWithoutRef<T> & {
        onMouseDown?: (e: MouseEvent) => void;
        onKeyDown?: (e: KeyboardEvent) => void;
        onFocus?: (e: FocusEvent) => void;
      },
    ) => ({
      ...props,
      ref: (element: HTMLElement | null) => {
        if (element) {
          elements.current.set(id, element);
        } else {
          elements.current.delete(id);
        }
      },
      onMouseDown: (e: MouseEvent) => {
        props.onMouseDown?.(e);
        if (e.target !== e.currentTarget) return;
        setFocusableId(id);
      },
      onKeyDown: (e: KeyboardEvent) => {
        props.onKeyDown?.(e);
        if (e.target !== e.currentTarget) return;
        if (e.key === 'Tab' && e.shiftKey) {
          onShiftTab();
          return;
        }
      },
      onFocus: (e: FocusEvent) => {
        props.onFocus?.(e);
        if (e.target !== e.currentTarget) return;
        setFocusableId(id);
        const focusedElement = elements.current.get(id);
        if (focusedElement) scrollItemIntoViewRespectingSticky(focusedElement);
      },
      'data-roving-tabindex-item': true,
      tabIndex: focusableId === id ? 0 : -1,
    }),
  };
}

interface RovingTabindexRootBaseProps<T> {
  children: ReactNode | ReactNode[];
  as?: T;
  valueId?: string;
}

type RovingTabindexRootProps<T extends ElementType> = RovingTabindexRootBaseProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof RovingTabindexRootBaseProps<T>>;

export function RovingTabindexRoot<T extends ElementType>({
  children,
  valueId,
  as,
  ...props
}: RovingTabindexRootProps<T>) {
  const Component = as ?? 'div';

  const [focusableId, setFocusableId] = useState<string | null>(null);
  const [isShiftTabbing, setIsShiftTabbing] = useState(false);

  const elements = useRef(new Map<string, HTMLElement>());
  const ref = useRef<HTMLDivElement | null>(null);

  function getOrderedItems() {
    if (!ref.current) return [];
    const elementsFromDOM = Array.from(
      ref.current.querySelectorAll<HTMLElement>('[data-roving-tabindex-item]'),
    );

    return Array.from(elements.current)
      .sort((a, b) => elementsFromDOM.indexOf(a[1]) - elementsFromDOM.indexOf(b[1]))
      .map(([id, element]) => ({ id, element }));
  }

  return (
    <RovingTabindexContext.Provider
      value={{
        elements,
        getOrderedItems,
        setFocusableId,
        focusableId,
        onShiftTab: function () {
          setIsShiftTabbing(true);
        },
      }}
    >
      <Component
        {...props}
        data-root
        onBlur={() => {
          setIsShiftTabbing(false);
        }}
        onFocus={(e) => {
          if (e.target !== e.currentTarget || isShiftTabbing) return;

          const orderedItems = getOrderedItems();

          if (orderedItems.length === 0) return;

          if (focusableId != null) {
            elements.current.get(focusableId)?.focus();
          } else if (valueId != null) {
            elements.current.get(valueId)?.focus();
          } else {
            orderedItems.at(0)?.element.focus();
          }
        }}
        ref={ref}
        tabIndex={isShiftTabbing ? -1 : 0}
      >
        {children}
      </Component>
    </RovingTabindexContext.Provider>
  );
}

export function getNextFocusableId(
  orderedItems: RovingTabindexItem[],
  id: string,
): RovingTabindexItem | undefined {
  const currIndex = orderedItems.findIndex((item) => item.id === id);
  return orderedItems.at(currIndex === orderedItems.length - 1 ? 0 : currIndex + 1);
}

export function getPrevFocusableId(
  orderedItems: RovingTabindexItem[],
  id: string,
): RovingTabindexItem | undefined {
  const currIndex = orderedItems.findIndex((item) => item.id === id);
  return orderedItems.at(currIndex === 0 ? -1 : currIndex - 1);
}

export function getParentFocusableId(
  orderedItems: RovingTabindexItem[],
  id: string,
): RovingTabindexItem | undefined {
  const currentElement = orderedItems.find((item) => item.id === id)?.element;

  if (currentElement == null) return;

  let possibleParent: HTMLElement | null = currentElement.parentElement;
  while (
    possibleParent !== null &&
    !possibleParent.hasAttribute('data-roving-tabindex-item') &&
    !possibleParent.hasAttribute('data-root')
  ) {
    possibleParent = possibleParent.parentElement ?? null;
  }

  if (possibleParent == null || possibleParent.hasAttribute('data-root')) return undefined;

  return orderedItems.find((item) => item.element === possibleParent);
}

export function getFirstFocusableId(
  orderedItems: RovingTabindexItem[],
): RovingTabindexItem | undefined {
  return orderedItems.at(0);
}

export function getLastFocusableId(
  orderedItems: RovingTabindexItem[],
): RovingTabindexItem | undefined {
  return orderedItems.at(-1);
}

// wrapArray([1,2,3],2) -> [3,1,2]
function wrapArray<T>(array: T[], startIndex: number) {
  return array.map((_, index) => array[(startIndex + index) % array.length]);
}

export function getNextFocusableIdByTypeahead(
  items: RovingTabindexItem[],
  id: string,
  keyPressed: string,
) {
  const currentIndex = items.findIndex((item) => item.id === id);
  const wrappedItems = wrapArray(items, currentIndex);
  let index = 0,
    typeaheadMatchItem: RovingTabindexItem | undefined;

  while (index < wrappedItems.length - 1 && typeaheadMatchItem == null) {
    const nextItem = wrappedItems.at(index + 1);

    const text = nextItem?.element.textContent ?? '';
    if (text.charAt(0).toLowerCase() === keyPressed.charAt(0).toLowerCase()) {
      typeaheadMatchItem = nextItem;
    }

    index += 1;
  }

  return typeaheadMatchItem;
}
