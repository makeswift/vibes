'use client'

import Link from 'next/link'
import { forwardRef, useEffect, useState } from 'react'

import * as Accordion from '@radix-ui/react-accordion'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import clsx from 'clsx'
import { ChevronDown } from 'lucide-react'

import Button from '../button'

type SecondaryMenuItem = {
  title: string
  href: string
}

type InnerMenuItem = {
  title: string
  content: string
  href: string
  icon?: React.ReactNode
}

type SubMenuItem = {
  title?: string
  content?: string
  innerMenuItems?: InnerMenuItem[]
}

type imageContainer = {
  title: string
  description: string
  img: string
  alt: string
}

type MenuItem = {
  id: string
  title: string
  description: string
  href?: string
  subMenuItems: SubMenuItem[]
  img?: imageContainer[]
}

type NavigationProps = {
  mainMenuItems: MenuItem[]
  secondaryMenuItems: SecondaryMenuItem[]
  fixed?: boolean
}

const Navigation = ({ mainMenuItems, secondaryMenuItems, fixed }: NavigationProps) => {
  const [innerItems, setInnerItems] = useState<InnerMenuItem[]>([])
  const [activeTitle, setActiveTitle] = useState<string>('')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY)
  const [isScrollingUp, setIsScrollingUp] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY
      setIsScrollingUp(prevScrollPos > currentScrollPos)
      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [prevScrollPos])

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleMouseEnter = (menuItem: MenuItem) => {
    setActiveTitle(menuItem.subMenuItems[0].title || '')
    setInnerItems(menuItem.subMenuItems[0].innerMenuItems || [])
  }

  const handleClick = (title: string) => {
    setActiveTitle(title)
    const selectedMenuItem = mainMenuItems.find(item =>
      item.subMenuItems.some(subItem => subItem.title === title)
    )
    if (selectedMenuItem) {
      const selectedSubMenu = selectedMenuItem.subMenuItems.find(subItem => subItem.title === title)
      if (selectedSubMenu) {
        setInnerItems(selectedSubMenu.innerMenuItems || [])
      }
    }
  }

  return (
    <NavigationMenu.Root
      className={clsx(
        'mx-auto w-full pt-5',
        fixed || isScrollingUp
          ? 'sticky top-0 z-10 translate-y-0 transition-transform duration-200 ease-out'
          : prevScrollPos < 10
            ? 'relative'
            : 'sticky top-0 z-10 -translate-y-full transition-transform duration-200 ease-out'
      )}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center rounded-[26px] border border-contrast-400 bg-contrast-500/50 px-2 lg:rounded-full">
        <div className="flex flex-1 shrink-0 items-center gap-5">
          <svg
            width="88"
            height="34"
            viewBox="0 0 88 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M33.9359 17C33.9359 7.6109 26.3385 0 16.9679 0C7.59655 0 0 7.6109 0 17C0 26.3891 7.59655 34 16.9679 34C26.3385 34 33.9359 26.3891 33.9359 17ZM11.1445 5.70945C12.5758 3.10335 14.4185 1.54445 16.3546 1.27245V7.3797C14.1114 7.4239 11.9743 7.7129 10.0289 8.2025C10.3555 7.30065 10.7288 6.46595 11.1445 5.70945ZM10.0705 5.11785C9.46695 6.23185 8.97257 7.40182 8.59426 8.61135C7.38701 8.99037 6.21925 9.48483 5.10735 10.0895C3.81779 10.8001 2.70469 11.6433 1.84866 12.5936C2.59137 10.0453 3.96284 7.72552 5.83647 5.84835C7.7101 3.97118 10.0255 2.59712 12.569 1.853C11.6205 2.7098 10.7789 3.82585 10.0705 5.11785ZM7.36493 16.3855C7.4099 14.1381 7.69835 11.9969 8.18703 10.0479C7.28688 10.3751 6.45376 10.75 5.69868 11.1665C3.0975 12.5996 1.54154 14.4458 1.2692 16.3855H7.36493ZM9.5784 9.5965C8.99555 11.6306 8.64347 13.9332 8.59256 16.3855H11.2413C12.3999 15.9309 13.4522 15.2412 14.3322 14.3597C15.2121 13.4783 15.9006 12.4241 16.3546 11.2634V8.6088C13.9069 8.6598 11.6086 9.01255 9.5784 9.5965ZM1.2692 17.6145H7.36493C7.4099 19.8619 7.69835 22.0031 8.18703 23.9522C7.28688 23.6249 6.45376 23.2501 5.69868 22.8336C3.0975 21.4005 1.54154 19.5543 1.2692 17.6145ZM8.59256 17.6145C8.64262 20.0668 8.99555 22.3694 9.5784 24.4035C11.6086 24.9874 13.9069 25.3402 16.3546 25.3912V22.7367C15.9006 21.5759 15.2121 20.5217 14.3322 19.6403C13.4522 18.7588 12.3999 18.0691 11.2413 17.6145H8.59256ZM5.10735 23.9105C6.21925 24.5152 7.38701 25.0105 8.59426 25.3895H8.59341C8.97144 26.599 9.46554 27.769 10.0688 28.883C10.778 30.175 11.6196 31.2902 12.5682 32.147C10.025 31.4026 7.70991 30.0285 5.83659 28.1513C3.96328 26.2742 2.59207 23.9545 1.84951 21.4064C2.70469 22.3567 3.81779 23.1999 5.10735 23.9105ZM11.1445 28.2906C12.5758 30.8967 14.4185 32.4556 16.3546 32.7276V26.6203C14.1114 26.5761 11.9743 26.2871 10.0289 25.7975C10.3555 26.6985 10.7288 27.5341 11.1445 28.2906ZM23.8654 28.883C23.1562 30.175 22.3145 31.2902 21.366 32.147H21.3669C23.9101 31.4026 26.2251 30.0285 28.0984 28.1513C29.9718 26.2742 31.343 23.9545 32.0855 21.4064C31.2312 22.3567 30.1172 23.1999 28.8277 23.9105C27.7158 24.5152 26.548 25.0105 25.3408 25.3895C24.9627 26.599 24.4686 27.769 23.8654 28.883ZM22.7905 28.2906C23.2262 27.4896 23.5995 26.6561 23.907 25.7975C21.9608 26.2871 19.8236 26.5761 17.5813 26.6203V32.7276C19.5165 32.4556 21.3601 30.8967 22.7905 28.2906ZM28.2364 22.8344C27.4369 23.2707 26.605 23.6444 25.748 23.9522C26.2367 22.0031 26.5251 19.8619 26.5701 17.6145H32.6658C32.3935 19.5534 30.8375 21.4005 28.2364 22.8344ZM24.3566 24.4035C24.9403 22.3694 25.2924 20.0668 25.3433 17.6145L22.6946 17.6137C21.5355 18.0686 20.4828 18.7587 19.6027 19.6408C18.7226 20.5228 18.0341 21.5777 17.5805 22.7392V25.3912C20.029 25.3402 22.3264 24.9874 24.3566 24.4035ZM32.6658 16.3855H26.5701C26.5251 14.1381 26.2367 11.9969 25.748 10.0479C26.6482 10.3751 27.4821 10.75 28.2372 11.1665C30.8384 12.5996 32.3935 14.4458 32.6658 16.3855ZM25.3425 16.3855C25.2916 13.9332 24.9395 11.6306 24.3558 9.5965C22.3256 9.01255 20.0281 8.6598 17.5805 8.6088V11.2608C18.0341 12.422 18.7225 13.4767 19.6025 14.3586C20.4824 15.2405 21.5349 15.9306 22.6938 16.3855H25.3425ZM28.8268 10.0895C27.7149 9.48485 26.5472 8.98953 25.3399 8.6105H25.3416C24.9635 7.40101 24.4695 6.23105 23.8663 5.117C23.157 3.825 22.3154 2.7098 21.3669 1.853C23.9099 2.59749 26.2248 3.97171 28.098 5.84886C29.9711 7.726 31.3422 10.0456 32.0847 12.5936C31.2303 11.6433 30.1164 10.8001 28.8268 10.0895ZM22.7896 5.70945C21.3592 3.10335 19.5157 1.54445 17.5805 1.27245L17.5796 7.3797C19.8228 7.4239 21.9599 7.7129 23.9061 8.2025C23.5787 7.30065 23.2054 6.46595 22.7896 5.70945ZM42.7151 29.9523H40.3956V21.1854H42.7151V29.9523ZM42.7151 19.8177H40.3956V17.7327H42.7151V19.8177ZM46.5304 32.8236H44.21V21.1854H46.4455V22.2793H46.4964C47.0589 21.5101 47.8776 20.9457 49.0722 20.9457C51.3908 20.9457 52.8755 22.8429 52.8755 25.5773C52.8755 28.4146 51.3408 30.209 49.0891 30.209C47.8607 30.209 47.0589 29.7134 46.5643 28.9612H46.5304V32.8236ZM46.4786 25.6453C46.4786 27.2348 47.2125 28.2778 48.5945 28.2778C49.7713 28.2778 50.5221 27.3028 50.5221 25.6453C50.5221 23.9878 49.9418 22.8259 48.5088 22.8259C47.0589 22.8259 46.4786 24.0728 46.4786 25.6453ZM61.1881 27.3887C61.1881 29.149 59.6865 30.209 57.5027 30.209C54.9609 30.209 53.5458 28.9782 53.4092 27.115H55.559C55.7126 28.1239 56.4286 28.5677 57.4688 28.5677C58.4928 28.5677 59.0722 28.1749 59.0722 27.5595C59.0722 26.8272 58.2245 26.6698 57.2131 26.4819C57.0683 26.455 56.9201 26.4275 56.7705 26.3976C55.201 26.0899 53.6654 25.6632 53.6654 23.749C53.6654 21.8518 55.2349 20.9457 57.2304 20.9457C59.5329 20.9457 60.8131 22.0915 60.9828 23.851H58.8847C58.7829 22.9109 58.1857 22.5692 57.1964 22.5692C56.292 22.5692 55.6948 22.9109 55.6948 23.5433C55.6948 24.1738 56.5101 24.3236 57.5069 24.5068C57.6994 24.5421 57.8986 24.5787 58.1 24.6203C59.5677 24.9279 61.1881 25.3377 61.1881 27.3887ZM69.9954 21.1854V29.9523H67.7607V28.9272H67.7098C67.1125 29.7305 66.4304 30.192 65.2028 30.192C63.2574 30.192 62.1663 28.9442 62.1663 27.03V21.1854H64.468V26.6364C64.468 27.6624 64.9296 28.226 65.9188 28.226C67.0107 28.226 67.6758 27.4057 67.6758 26.2437V21.1854H69.9954ZM73.8157 29.9523H71.4962V21.1854H73.7309V22.3652H73.7818C74.2594 21.5611 75.112 20.9457 76.3236 20.9457C77.4324 20.9457 78.319 21.5611 78.7457 22.4842H78.7797C79.3769 21.5271 80.2983 20.9457 81.4063 20.9457C83.249 20.9457 84.2892 22.1425 84.2892 24.0567V29.9523H81.9696V24.4494C81.9696 23.4583 81.475 22.9457 80.6224 22.9457C79.6501 22.9457 79.0528 23.6971 79.0528 24.8599V29.9523H76.7325V24.4494C76.7325 23.4583 76.2379 22.9457 75.3852 22.9457C74.4469 22.9457 73.8157 23.6971 73.8157 24.8599V29.9523ZM42.7499 14.9362H40.4295V2.7166H42.7499V14.9362ZM52.9935 10.5604C52.9935 13.1758 51.1346 15.1929 48.4223 15.1929C45.71 15.1929 43.8503 13.1758 43.8503 10.5612C43.8503 7.94665 45.71 5.9296 48.4223 5.9296C51.1346 5.9296 52.9935 7.94665 52.9935 10.5604ZM46.2046 10.5612C46.2046 12.2697 46.9885 13.4155 48.4223 13.4155C49.8374 13.4155 50.6392 12.2697 50.6392 10.5612C50.6392 8.8519 49.8374 7.68995 48.4223 7.68995C46.9894 7.68995 46.2046 8.85275 46.2046 10.5612ZM61.0829 16.9354C60.3491 17.6196 59.2233 17.9265 57.9269 17.9265C55.5387 17.9265 54.0718 16.9014 53.8334 15.1929H56.1359C56.3234 15.7394 56.818 16.167 57.893 16.167C59.2063 16.167 59.8375 15.5346 59.8375 14.3378V13.3807H59.7866C59.2742 13.9621 58.609 14.4066 57.5002 14.4066C55.5556 14.4066 53.645 12.8681 53.645 10.2195C53.645 7.6041 55.2146 5.9296 57.4323 5.9296C58.5242 5.9296 59.3259 6.35715 59.8545 7.09155H59.8884V6.1693H62.1231V14.2698C62.1231 15.4997 61.7311 16.3378 61.0829 16.9354ZM55.9137 10.1855C55.9137 11.6722 56.6984 12.5434 57.893 12.5434C59.3598 12.5434 59.9571 11.4673 59.9571 10.1685C59.9571 8.88675 59.2742 7.7928 57.876 7.7928C56.6984 7.7928 55.9137 8.71505 55.9137 10.1855ZM72.3335 10.5604C72.3335 13.1758 70.4738 15.1929 67.7615 15.1929C65.05 15.1929 63.1904 13.1758 63.1904 10.5612C63.1904 7.94665 65.05 5.9296 67.7615 5.9296C70.4738 5.9296 72.3335 7.94665 72.3335 10.5604ZM65.5447 10.5612C65.5447 12.2697 66.3294 13.4155 67.7615 13.4155C69.1775 13.4155 69.9792 12.2697 69.9792 10.5612C69.9792 8.8519 69.1775 7.68995 67.7624 7.68995C66.3294 7.68995 65.5447 8.85275 65.5447 10.5612ZM84.3969 11.5863H74.3671V9.588H84.3969V11.5863ZM85.8434 18.9839C85.4506 18.9839 85.1325 19.3027 85.1325 19.6962C85.1327 19.885 85.2077 20.0659 85.341 20.1993C85.4743 20.3327 85.655 20.4076 85.8434 20.4076H87.2645C87.3599 20.411 87.4549 20.395 87.544 20.3607C87.6331 20.3264 87.7144 20.2745 87.783 20.2081C87.8516 20.1416 87.9062 20.062 87.9435 19.974C87.9808 19.886 88 19.7914 88 19.6958C88 19.6002 87.9808 19.5055 87.9435 19.4175C87.9062 19.3295 87.8516 19.2499 87.783 19.1835C87.7144 19.117 87.6331 19.0651 87.544 19.0309C87.4549 18.9966 87.3599 18.9806 87.2645 18.9839H85.8434Z"
              fill="white"
            />
          </svg>
        </div>

        <NavigationMenu.List className="hidden h-full items-center items-stretch lg:flex" asChild>
          <div className="relative">
            {mainMenuItems.map((menuItem, index) => (
              <NavigationMenu.Item value={menuItem.id} key={index} asChild>
                {menuItem.href ? (
                  <NavigationMenu.Trigger>
                    <a
                      className="select-none px-3 py-2 text-sm font-normal leading-none text-foreground/70 outline-none hover:text-foreground focus:shadow-[0_0_0_2px]"
                      href={menuItem.href}
                    >
                      {menuItem.title}
                    </a>
                  </NavigationMenu.Trigger>
                ) : (
                  <NavigationMenu.Trigger
                    onMouseEnter={() => handleMouseEnter(menuItem)}
                    className={`group flex select-none items-center justify-between gap-0.5 rounded-[4px] px-3 py-2 text-sm font-normal leading-none text-foreground/70 outline-none hover:text-foreground ${menuItem.id}`}
                  >
                    {menuItem.title}
                    <ChevronDown
                      size={16}
                      className="relative top-[1px] text-foreground transition-transform duration-300 ease-in group-data-[state=open]:-rotate-180"
                      aria-hidden
                    />
                  </NavigationMenu.Trigger>
                )}

                {menuItem.subMenuItems.length > 0 && (
                  <NavigationMenu.Content className="data-[motion=from-start]:animate-enterFromRight data-[motion=from-end]:animate-enterFromLeft data-[motion=to-start]:animate-exitToRight data-[motion=to-end]:animate-exitToLeft pointer-events-auto absolute left-0 top-0 w-full rounded-2xl bg-contrast-500/50 backdrop-blur sm:w-auto">
                    <div
                      className={`content-container grid list-none rounded-2xl border border-contrast-400 ${
                        menuItem.subMenuItems[0].title && menuItem.img
                          ? 'grid-cols-[250px_1fr_300px]'
                          : menuItem.subMenuItems[0].title
                            ? 'grid-cols-[250px_1fr]'
                            : menuItem.img
                              ? 'grid-cols-[1fr_300px]'
                              : 'grid-cols-[1fr]'
                      }`}
                    >
                      <div
                        className={`${
                          menuItem.subMenuItems[0].title ? '' : 'hidden'
                        } z-10 h-full rounded-l-2xl bg-[#13171E] backdrop-blur-xl`}
                      >
                        <ul
                          className={clsx(
                            'list group m-0 grid w-full list-none gap-2 p-2',
                            'data-[enhanced=true]:after:opacity-[var(--opacity,0)] data-[enhanced=true]:after:[transition:opacity_0.025s,inset_0.025s_0.025s] data-[enhanced=true]:hover:after:opacity-[1] data-[enhanced=true]:hover:after:[transition:opacity_0.2s_0.2s,inset_0.2s]',
                            "after:pointer-events-none after:absolute after:bottom-[var(--bottom)] after:left-[var(--left)] after:right-[var(--right)] after:top-[var(--top)] after:z-[1] after:h-[var(--height)] after:w-[var(--width)] after:rounded-[0.5rem] after:bg-[#39415050] after:content-[''] after:[transition:inset_0.2s]"
                          )}
                        >
                          {menuItem.subMenuItems.map((subMenuItem, subIndex) => (
                            <ListItem
                              key={subIndex}
                              title={subMenuItem.title || ''}
                              content={subMenuItem.content || ''}
                              href="#"
                              isActive={activeTitle === subMenuItem.title}
                              onClick={() => handleClick(subMenuItem.title || '')}
                            />
                          ))}
                        </ul>
                      </div>
                      <ul
                        className={clsx(
                          `group grid ${
                            innerItems.length < 4 ? 'grid-cols-1' : 'grid-cols-1 xl:grid-cols-2'
                          } m-0 h-full w-full min-w-[400px] list-none items-start justify-between gap-2 p-2 xl:min-w-[500px]`,
                          'data-[enhanced=true]:after:opacity-[var(--opacity,0)] data-[enhanced=true]:after:[transition:opacity_0.025s,inset_0.025s_0.025s] data-[enhanced=true]:hover:after:opacity-[1] data-[enhanced=true]:hover:after:[transition:opacity_0.2s_0.2s,inset_0.2s]',
                          "after:pointer-events-none after:absolute after:bottom-[var(--bottom)] after:left-[var(--left)] after:right-[var(--right)] after:top-[var(--top)] after:z-[1] after:h-[var(--height)] after:w-[var(--width)] after:rounded-[0.5rem] after:bg-[#39415050] after:content-[''] after:[transition:inset_0.2s]"
                        )}
                      >
                        {innerItems.map((item, innerIndex) => (
                          <ListItem
                            key={innerIndex}
                            title={item.title}
                            content={item.content}
                            href={item.href}
                            isActive={false}
                            onClick={() => {}}
                            isInnerMenuItem={true}
                            icon={item.icon}
                          />
                        ))}
                      </ul>

                      {menuItem.img && menuItem.img.length > 0 && (
                        <div className="relative m-2 ml-0 max-h-[250px] min-h-[200px] overflow-hidden rounded-lg bg-[#5F49F4]/25 p-3.5">
                          <div className="absolute left-1/2 right-1/2 top-32 h-full w-full rounded-full bg-[#5F49F4] opacity-70 blur-[120px]" />
                          <p className="text-foreground">{menuItem.img[0].title}</p>
                          <p className="text-foreground/50">{menuItem.img[0].description}</p>
                          <img
                            className="absolute left-20 top-32"
                            src={menuItem.img[0].img}
                            alt={menuItem.img[0].alt}
                          />
                        </div>
                      )}
                    </div>
                  </NavigationMenu.Content>
                )}
              </NavigationMenu.Item>
            ))}

            <NavigationMenu.Indicator className="data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-[1px] bg-gradient-to-r from-primary/0 via-primary to-primary/0 mix-blend-overlay transition-all duration-200" />
          </div>
        </NavigationMenu.List>

        <div className="hidden flex-1 items-center justify-end gap-5 lg:flex">
          {secondaryMenuItems.map((menuItem, index) => (
            <Link
              className="text-sm text-foreground/70 transition-colors hover:text-foreground"
              href={menuItem.href}
            >
              {menuItem.title}
            </Link>
          ))}
          <Button variant="primary" size="small">
            Book a demo
          </Button>
        </div>

        <div className="flex items-center gap-3.5 lg:hidden">
          <div
            className="group relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-md"
            onClick={handleMobileMenuToggle}
          >
            <span
              className={`absolute top-1/2 h-0.5 w-4 bg-foreground ${
                isMobileMenuOpen ? 'translate-y-0 rotate-45 ' : '-translate-y-1'
              } transition-all duration-150`}
            ></span>
            <span
              className={`absolute top-1/2 h-0.5 w-4 -translate-y-1/2 bg-foreground transition-all duration-150 ${
                isMobileMenuOpen ? 'translate-y-0 -rotate-45' : 'translate-y-0.5'
              }`}
            ></span>
          </div>
          <Button variant="primary" size="small" borderGlow={false} className="hidden sm:block">
            Book a Demo
          </Button>
        </div>
      </div>

      <div
        className={`flex w-full flex-col overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen ? 'max-h-[calc(100svh-6rem)]' : 'max-h-0'
        }`}
      >
        <div
          className={`max-h-[calc(100svh-1.25rem)] overflow-y-scroll [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
            isMobileMenuOpen ? 'border-t border-foreground/10' : 'border-none'
          }`}
        >
          <MobileMenu mainMenuItems={mainMenuItems} />
        </div>
        <div className="w-full flex-col items-start gap-3.5 border-t border-foreground/10 p-4 sm:hidden">
          <Button variant="primary" size="small" borderGlow={false} className="sm:hidden">
            Book a Demo
          </Button>
        </div>
      </div>

      <div className="perspective-[2000px] absolute left-0 top-full flex w-full justify-center">
        <NavigationMenu.Viewport className="data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[6px] transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]" />
      </div>
    </NavigationMenu.Root>
  )
}

const ListItem = ({
  title,
  content,
  href,
  isActive,
  onClick,
  isInnerMenuItem,
  icon,
}: {
  title: string
  content: string
  href: string
  isActive: boolean
  onClick: () => void
  isInnerMenuItem?: boolean
  icon?: React.ReactNode
}) => {
  useEffect(() => {
    const LIST = document.querySelectorAll('.list') as NodeListOf<HTMLElement>
    LIST.forEach(list => {
      list.dataset.enhanced = 'true'
    })
    let current: HTMLElement | null = null
    const sync = () => {
      if (current) {
        const parents = document.querySelectorAll('.content-container')
        parents.forEach(parent => {
          const parentBounds = parent.getBoundingClientRect()
          if (current) {
            const currentBounds = current.getBoundingClientRect()

            const relativeTop = currentBounds.top - parentBounds.top
            const relativeLeft = currentBounds.left - parentBounds.left
            const relativeRight = parentBounds.right - currentBounds.right
            const relativeBottom = parentBounds.bottom - currentBounds.bottom

            const relativeHeight = currentBounds.height
            const relativeWidth = currentBounds.width

            LIST.forEach(list => {
              list.dataset.enhanced = 'true'
              list.style.setProperty('--top', `${relativeTop}px`)
              list.style.setProperty('--right', `${relativeRight}px`)
              list.style.setProperty('--bottom', `${relativeBottom}px`)
              list.style.setProperty('--left', `${relativeLeft}px`)
              list.style.setProperty('--height', `${relativeHeight}px`)
              list.style.setProperty('--width', `${relativeWidth}px`)
            })
          }
        })
      }
    }
    const UPDATE = ({ x, y }: { x: number; y: number }) => {
      const ARTICLE = document
        .elementFromPoint(x, y)
        ?.closest('.listitem')
        ?.querySelector('.list-item-container') as HTMLElement | null
      if (ARTICLE !== current) {
        current = ARTICLE
        sync()
      }
    }
    LIST.forEach(list => {
      list.addEventListener('pointermove', UPDATE)
    })
    window.addEventListener('resize', sync)
  }, [])

  return (
    <li
      className={`listitem relative z-10 h-full cursor-pointer list-none rounded-lg transition-all duration-150 hover:[--li-active:1] ${
        isActive ? 'bg-background/50 ' : ''
      }`}
      key={title}
    >
      <a
        href={href}
        onClick={onClick}
        className={clsx(
          'list-item-container relative flex items-start gap-x-2 p-3 py-2.5',
          "group-[&:not([data-enhanced])]:after:absolute group-[&:not([data-enhanced])]:after:inset-0 group-[&:not([data-enhanced])]:after:-z-[2] group-[&:not([data-enhanced])]:after:rounded-2xl group-[&:not([data-enhanced])]:after:bg-[hsl(0_0%_10%)]  group-[&:not([data-enhanced])]:after:opacity-[var(--li-active,0)] group-[&:not([data-enhanced])]:after:transition-opacity group-[&:not([data-enhanced])]:after:duration-200 group-[&:not([data-enhanced])]:after:content-['']"
        )}
      >
        {isInnerMenuItem && icon && <div className="mt-0.5 h-4 w-4">{icon}</div>}

        <div className="flex flex-col gap-y-0.5">
          <h3 className="text-sm text-foreground">{title}</h3>
          <p className="text-xs font-normal text-foreground/50">{content}</p>
        </div>

        {isActive && (
          <span
            className="absolute -right-4 top-1/2 h-4 w-4 -translate-y-1/2
         bg-[#13171E] shadow-[1.5px_0px_0px_rgba(255,255,255,0.2)]"
            style={{
              clipPath: 'polygon(45% 0%, 45% 100%, 100% 45%)',
            }}
          ></span>
        )}
      </a>
    </li>
  )
}

const AccordionItem = forwardRef<
  HTMLDivElement,
  { children: React.ReactNode; className?: string; value: string }
>(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Item
    className={clsx(
      'focus-within:shadow-mauve12 mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10',
      className
    )}
    {...props}
    ref={forwardedRef}
  >
    {children}
  </Accordion.Item>
))

const AccordionTrigger = forwardRef<
  HTMLButtonElement,
  { children: React.ReactNode; className?: string }
>(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Header className="flex">
    <Accordion.Trigger
      className={clsx(
        'group flex h-12 flex-1 cursor-pointer items-center justify-between p-2 text-base leading-none text-foreground outline-none',
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
      <ChevronDown
        className="ease-[cubic-bezier(0.87,_0,_0.13,_1)] ml-5 text-foreground transition-transform duration-300 group-data-[state=open]:rotate-180"
        aria-hidden
      />
    </Accordion.Trigger>
  </Accordion.Header>
))

const AccordionContent = forwardRef<
  HTMLDivElement,
  { children: React.ReactNode; className?: string }
>(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Content
    className={clsx(
      'data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px] text-foreground',
      className
    )}
    {...props}
    ref={forwardedRef}
  >
    <div className="flex flex-col gap-y-2.5">{children}</div>
  </Accordion.Content>
))

const MobileMenu = ({ mainMenuItems }: { mainMenuItems: MenuItem[] }) => (
  <Accordion.Root className="w-full p-2" type="single" defaultValue="item-1" collapsible>
    <>
      {mainMenuItems.map((menuItem, index) => (
        <AccordionItem value={menuItem.id} key={index}>
          {menuItem.href ? (
            <a
              className="group flex h-11 flex-1 cursor-pointer items-center justify-between p-2 text-base leading-none text-foreground outline-none"
              href={menuItem.href}
            >
              {menuItem.title}
            </a>
          ) : (
            <AccordionTrigger>{menuItem.title}</AccordionTrigger>
          )}
          <AccordionContent>
            {menuItem.subMenuItems.map((subMenuItem, subIndex) => (
              <div key={subIndex}>
                {subMenuItem.innerMenuItems && (
                  <ul className="flex flex-col">
                    {subMenuItem.innerMenuItems.map((innerItem, innerIndex) => (
                      <li key={innerIndex} className="flex items-start gap-x-2 px-3 py-2.5">
                        {innerItem.icon && <div className="mt-0.5 h-4 w-4">{innerItem.icon}</div>}
                        <div className="flex flex-col gap-y-0.5">
                          <a className="text-sm text-foreground" href={innerItem.href}>
                            {innerItem.title}
                          </a>
                          <p className="text-xs font-normal text-foreground/50">
                            {innerItem.content}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
      <a
        className="flex h-11 flex-1 cursor-pointer items-start justify-start p-2 py-3 text-base text-foreground outline-none"
        href="#"
      >
        Log In
      </a>
    </>
  </Accordion.Root>
)

export default Navigation
