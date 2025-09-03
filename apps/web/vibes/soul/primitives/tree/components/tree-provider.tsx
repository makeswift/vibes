'use client';

import type { ReactNode } from 'react';
import { createContext, useCallback, useContext, useMemo, useReducer } from 'react';

import type { TreeNodeType } from './tree-node';

// Helper function to recursively collect all node IDs that have children
function collectParentNodeIds(nodes: TreeNodeType[]): Set<string> {
  const parentIds = new Set<string>();

  function traverse(nodeList: TreeNodeType[]) {
    for (const node of nodeList) {
      if (node.children && node.children.length > 0) {
        parentIds.add(node.id);
        traverse(node.children);
      }
    }
  }

  traverse(nodes);
  return parentIds;
}

interface TreeState {
  openNodes: Map<string, boolean>;
  selectedNode: string | null;
}

type TreeActions = { type: 'TOGGLE'; id: string } | { type: 'SELECT'; id: string };

function treeReducer(state: TreeState, action: TreeActions): TreeState {
  switch (action.type) {
    case 'TOGGLE':
      const currentState = state.openNodes.get(action.id) ?? false;
      return {
        ...state,
        openNodes: new Map(state.openNodes).set(action.id, !currentState),
      };
    case 'SELECT':
      return {
        ...state,
        selectedNode: action.id,
      };
  }
}

interface TreeContextType {
  state: TreeState;
  toggle: (id: string) => void;
  select: (id: string) => void;
}

const TreeContext = createContext<TreeContextType | undefined>(undefined);

export function TreeProvider({
  children,
  data,
  defaultOpen = false,
}: {
  children: ReactNode;
  data?: TreeNodeType[];
  defaultOpen?: boolean;
}) {
  const initialOpenNodes = useMemo(() => {
    if (!defaultOpen || !data) {
      return new Map<string, boolean>();
    }

    const parentIds = collectParentNodeIds(data);
    const openNodes = new Map<string, boolean>();

    // Set all parent nodes to open
    for (const id of parentIds) {
      openNodes.set(id, true);
    }

    return openNodes;
  }, [data, defaultOpen]);

  const [state, dispatch] = useReducer(treeReducer, {
    openNodes: initialOpenNodes,
    selectedNode: null,
  });

  const toggle = useCallback((id: string) => {
    dispatch({ type: 'TOGGLE', id });
  }, []);

  const select = useCallback((id: string) => {
    dispatch({ type: 'SELECT', id });
  }, []);

  const contextValue = useMemo(
    () => ({
      state,
      toggle,
      select,
    }),
    [state, toggle, select],
  );

  return <TreeContext.Provider value={contextValue}>{children}</TreeContext.Provider>;
}

export function useTree() {
  const context = useContext(TreeContext);
  if (context === undefined) {
    throw new Error('useTree must be used within a TreeProvider');
  }
  return context;
}
