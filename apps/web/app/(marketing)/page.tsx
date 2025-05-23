'use client';

import { clsx } from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode, useEffect, useState } from 'react';

import { ButtonLink } from '@/components/ui/button-link';
import Transition from '@/components/ui/transition';
import { Arrow } from '@/icons/generated';

import { EazyTheme } from '../stickers/eazy-theme';
import { Figma } from '../stickers/figma';
import { HandcraftedCode } from '../stickers/handcrafted-code';
import { KeepIt100 } from '../stickers/keep-it-100';
import { LikeTotally } from '../stickers/like-totally';
import { MadProps } from '../stickers/mad-props';
import { Nextjs } from '../stickers/nextjs';
import { OpenSource } from '../stickers/open-source';
import { PrebuiltSections } from '../stickers/prebuilt-sections';
import { ProductionReady } from '../stickers/production-ready';
import { Reactjs } from '../stickers/reactjs';
import { ShoppingBag } from '../stickers/shopping-bag';
import { Typescript } from '../stickers/typescript';
import { Vibes1 } from '../stickers/vibes-1';
import { Vibes10 } from '../stickers/vibes-10';
import { Vibes11 } from '../stickers/vibes-11';
import { Vibes12 } from '../stickers/vibes-12';
import { Vibes13 } from '../stickers/vibes-13';
import { Vibes14 } from '../stickers/vibes-14';
import { Vibes15 } from '../stickers/vibes-15';
import { Vibes16 } from '../stickers/vibes-16';
import { Vibes2 } from '../stickers/vibes-2';
import { Vibes3 } from '../stickers/vibes-3';
import { Vibes4 } from '../stickers/vibes-4';
import { Vibes5 } from '../stickers/vibes-5';
import { Vibes6 } from '../stickers/vibes-6';
import { Vibes7 } from '../stickers/vibes-7';
import { Vibes8 } from '../stickers/vibes-8';
import { Vibes9 } from '../stickers/vibes-9';

import { Form } from './form';

const useSmoothScroll = () => {
  const smoothScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return smoothScrollTo;
};

const ScrollButton: React.FC<{ to: string; children: React.ReactNode; className?: string }> = ({
  to,
  children,
  className,
}) => {
  const smoothScrollTo = useSmoothScroll();

  const handleClick = () => {
    smoothScrollTo(to);
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div className={clsx('cursor-pointer', className)} onClick={handleClick}>
      {children}
    </div>
  );
};

const FeatureCard = ({
  children,
  text,
  sticker,
}: {
  children?: ReactNode;
  text?: string;
  sticker: 'left' | 'right';
}) => (
  <div
    className={clsx(
      'flex min-h-auto w-full flex-col place-content-center items-center gap-y-5 rounded-3xl border-[1.5px] border-black bg-[#FFFAE0] md:min-h-72 md:flex-row',
    )}
  >
    <div
      className={clsx(
        'relative flex w-full justify-center md:w-96',
        { left: 'md:order-first', right: 'md:order-last' }[sticker],
      )}
    >
      {children}
    </div>
    <p className="w-full px-5 pb-6 text-2xl leading-snug sm:px-8 md:w-auto md:px-10 md:py-10 md:text-3xl lg:px-12">
      {text}
    </p>
  </div>
);

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollAmount = 10;
      if (window.scrollY > scrollAmount) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className="w-full overflow-clip bg-white text-black"
      style={{
        '--foreground': 'oklch(0% 0 0)',
        '--background': 'oklch(100% 0 0)',
      }}
    >
      <header
        className={clsx(
          'fixed top-0 left-0 z-50 hidden w-full items-center transition-all duration-300 sm:grid sm:grid-cols-3',
          isScrolled ? 'translate-y-3 px-7' : 'translate-y-8 px-10 md:translate-y-10',
        )}
      >
        <div>
          <ButtonLink href="/contribute" size="large">
            Contribute
          </ButtonLink>
        </div>
        <div
          className={clsx(
            'relative mx-auto h-8 w-32 origin-center transition-transform duration-300 md:h-10 md:w-40',
            isScrolled && 'scale-90 md:scale-[0.8]',
          )}
        >
          <Image alt="Vibes logo" fill priority src="/logo.svg" />
        </div>
        <div className="ml-auto">
          <ButtonLink href="/docs/soul" size="large">
            Docs
          </ButtonLink>
        </div>
      </header>

      <section className="relative h-[550px] w-full bg-white p-3 sm:h-[650px] sm:p-4 md:h-[calc(100vh-28px)] lg:p-5">
        <ScrollButton
          className="group absolute top-full left-1/2 z-20 -mt-6 hidden h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black md:flex"
          to="intro"
        >
          <Arrow className="scale-125 rotate-90 text-white transition-transform duration-300 ease-out group-hover:translate-y-2" />
        </ScrollButton>

        <Image
          alt="Arrow button container"
          className="absolute top-full left-1/2 z-10 hidden -translate-x-1/2 -translate-y-[74px] md:flex lg:-translate-y-[78px]"
          height={114}
          priority
          src="/hero-arrow-bg.svg"
          width={200}
        />

        <div className="relative z-0 h-full w-full place-content-start overflow-hidden rounded-3xl border-[1.5px] border-black bg-gradient-to-b from-[#FFDEB6] to-[#FFB5CE] p-5 pt-24 select-none after:absolute after:inset-0 after:-z-10 after:animate-[dotScrollSmall_500ms_linear_infinite] after:[background-image:radial-gradient(#FFB3CD_25%,transparent_25%),radial-gradient(#FFB3CD_25%,transparent_25%)] after:[background-size:12px_12px] after:[background-position:-0px_-0px,-6px_-6px] sm:place-content-center sm:pt-10 md:p-8 lg:place-content-center lg:rounded-[32px] lg:p-10 lg:after:animate-[dotScrollLarge_400ms_linear_infinite] lg:after:[background-size:16px_16px] lg:after:[background-position:-0px_-0px,-8px_-8px] xl:rounded-[40px]">
          <Image
            alt="Vibes logo"
            className="absolute top-6 left-5 z-50 sm:hidden"
            height={32}
            priority
            src="/logo.svg"
            width={120}
          />

          <h1 className="font-heading mx-auto max-w-full text-[clamp(2.75rem,_9vw,_3.5rem)] leading-none tracking-tight text-black sm:text-6xl md:mt-0 md:mb-5 md:max-w-2xl md:text-7xl lg:max-w-3xl lg:text-8xl xl:max-w-5xl xl:text-9xl">
            <div className="text-left md:ml-10">
              <span className="md:relative">
                <Transition
                  className="w-auto transition-all [transition-delay:100ms] duration-700 [transition-timing-function:cubic-bezier(.5,0,.25,1)]"
                  from="translate-y-28 opacity-0"
                  to="translate-y-0 opacity-100"
                >
                  A modern{' '}
                </Transition>
                <HandcraftedCode />
              </span>
            </div>

            <div className="text-left md:text-right">
              <span className="md:relative">
                <Transition
                  className="transition-all [transition-delay:150ms] duration-700 [transition-timing-function:cubic-bezier(.5,0,.25,1)]"
                  from="translate-y-28 opacity-0"
                  to="translate-y-0 opacity-100"
                >
                  UI library for{' '}
                </Transition>
              </span>
            </div>

            <div className="text-left md:text-center">
              <span className="md:relative">
                <Transition
                  className="transition-all [transition-delay:200ms] duration-700 [transition-timing-function:cubic-bezier(.5,0,.25,1)]"
                  from="translate-y-28 opacity-0"
                  to="translate-y-0 opacity-100"
                >
                  composable{' '}
                </Transition>
                <Reactjs />
              </span>
            </div>

            <div className="text-left">
              <span className="md:relative">
                <Transition
                  className="transition-all [transition-delay:250ms] duration-700 [transition-timing-function:cubic-bezier(.5,0,.25,1)]"
                  from="translate-y-28 opacity-0"
                  to="translate-y-0 opacity-100"
                >
                  websites{' '}
                </Transition>
                <ShoppingBag />
              </span>
            </div>
          </h1>

          <Transition
            className="transition-all [transition-delay:300ms] duration-700 [transition-timing-function:cubic-bezier(.5,0,.25,1)]"
            from="translate-y-28 opacity-0"
            to="translate-y-0 opacity-100"
          >
            <div className="mt-6 mb-4 flex items-center gap-1.5 sm:hidden">
              <ButtonLink href="/contribute" size="large">
                Contribute
              </ButtonLink>
              <ButtonLink href="/docs/soul" size="large">
                Docs
              </ButtonLink>
            </div>
          </Transition>
        </div>
      </section>

      <section className="h-auto px-5 pb-8 md:mb-8 md:place-content-end md:p-10 lg:mb-20">
        <div
          className="mx-auto max-w-[1200px] pt-12 text-3xl leading-snug tracking-tight md:pt-40 md:text-4xl md:leading-tight lg:text-5xl xl:text-6xl"
          id="intro"
        >
          <Transition
            className="transition-all [transition-delay:200ms] duration-700 [transition-timing-function:cubic-bezier(.5,0,.25,1)]"
            from="translate-y-28 opacity-0"
            to="translate-y-0 opacity-100"
          >
            <p>
              <span className="font-bold">VIBES</span> is an open-source theming engine for
              composable marketing and commerce sites.
            </p>
          </Transition>
          <Transition
            className="transition-all [transition-delay:250ms] duration-700 [transition-timing-function:cubic-bezier(.5,0,.25,1)]"
            from="translate-y-28 opacity-0"
            to="translate-y-0 opacity-100"
          >
            <p>
              A <span className="font-bold">VIBE</span> is a theme that includes a set of React UI
              components and styles.
            </p>
          </Transition>
        </div>
      </section>

      <section className="h-[70vh] w-full bg-white p-3 md:h-[70vh] md:p-4 lg:p-5">
        <div className="group flex h-full w-full flex-col overflow-hidden rounded-3xl border-[1.5px] border-black md:flex-row lg:rounded-[32px] xl:rounded-[40px]">
          <div className="group/soul relative h-1/3 w-full origin-left overflow-hidden bg-[#07090D] transition-all duration-300 ease-out will-change-[width] md:h-full md:w-1/3 md:group-hover:w-1/4 md:hover:!w-1/2">
            <div className="relative h-full w-full">
              <div className="@container absolute inset-0 z-[1] flex items-center justify-center bg-gradient-to-b from-black/40 to-black/60 opacity-0 transition-all duration-300 ease-out group-hover/soul:opacity-100">
                <Link
                  className="group/doc-link flex items-center gap-x-4 rounded-full px-6 py-4 focus-visible:ring-4 focus-visible:outline-hidden"
                  href="/docs/soul"
                >
                  <p className="-translate-y-1 text-3xl font-semibold text-white @xl:text-5xl">
                    View docs
                  </p>
                  <div className="flex size-10 items-center justify-center overflow-hidden rounded-full bg-white/90 transition-all duration-300 ease-out group-hover/doc-link:translate-x-1.5 group-hover/doc-link:bg-white/100 md:size-12 lg:size-14">
                    <Arrow className="text-black" />
                  </div>
                </Link>
              </div>
              <Image
                alt="Soul components"
                className="rotate-12 overflow-visible object-none transition-all duration-300 ease-out group-hover/soul:blur"
                fill
                src="/soul/soul-components.webp"
              />
            </div>
          </div>

          <div className="group/eclipse relative h-1/3 w-full origin-left overflow-hidden bg-[#07090D] transition-all duration-300 ease-out will-change-[width] md:h-full md:w-1/3 md:group-hover:w-1/4 md:hover:!w-1/2">
            <div className="relative h-full w-full">
              <div className="@container absolute inset-0 z-[1] flex items-center justify-center bg-gradient-to-b from-black/40 to-black/60 opacity-0 transition-all duration-300 ease-out group-hover/eclipse:opacity-100">
                <p className="-translate-y-1 text-center text-3xl font-semibold text-white @xl:text-5xl">
                  Coming soon!
                </p>
              </div>
              <Image
                alt="Eclipse components"
                className="rotate-12 overflow-visible object-none object-top transition-all duration-300 ease-out group-hover/eclipse:blur"
                fill
                src="/eclipse-components.webp"
              />
            </div>
          </div>

          <div className="group/2px relative h-1/3 w-full origin-center overflow-hidden border-y-[1.5px] border-black bg-[#FFD977] transition-all duration-300 ease-out will-change-[width] md:h-full md:w-1/3 md:border-x-[1.5px] md:border-y-0 md:group-hover:w-1/4 md:hover:!w-1/2">
            <div className="relative h-full w-full">
              <div className="@container absolute inset-0 z-[1] flex items-center justify-center bg-gradient-to-b from-black/40 to-black/60 opacity-0 transition-all duration-300 ease-out group-hover/2px:opacity-100">
                <p className="-translate-y-1 text-center text-3xl font-semibold text-white @xl:text-5xl">
                  Coming soon!
                </p>
              </div>
              <Image
                alt="2px components"
                className="rotate-12 overflow-visible object-none object-right transition-all duration-300 ease-out group-hover/2px:blur"
                fill
                src="/2px-components.webp"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto flex max-w-[1600px] flex-col items-start gap-x-16 gap-y-16 px-3 pt-20 pb-4 md:px-6 md:pt-48 md:pb-32 lg:flex-row xl:gap-x-24 xl:px-14">
        <div className="top-32 flex-1 lg:sticky">
          <h2 className="font-heading mb-3 text-3xl leading-none sm:text-4xl md:text-5xl lg:mb-5">
            The future of theming is here
          </h2>
          <p className="text-2xl md:text-3xl">
            <span className="font-bold">VIBES</span> are production ready and focus on advanced
            optimizations needed for marketing and commerce websites. Here&lsquo;s what you get with
            each <span className="font-bold">VIBE</span>:
          </p>
        </div>

        <div className="w-full space-y-7 lg:max-w-2xl lg:space-y-16 xl:max-w-3xl 2xl:max-w-4xl">
          <FeatureCard
            sticker="right"
            text="Modern patterns leveraging the latest features of Next.js: Server Components, Server Actions, PPR, and more!"
          >
            <Nextjs />
          </FeatureCard>

          <FeatureCard
            sticker="left"
            text="Multiple styles that can be customized to best represent your brand."
          >
            <EazyTheme />
          </FeatureCard>

          <FeatureCard
            sticker="right"
            text="Fast performance without sacrificing form and function."
          >
            <KeepIt100 />
          </FeatureCard>

          <FeatureCard
            sticker="left"
            text="Prebuilt section and page templates to get you started quickly."
          >
            <PrebuiltSections />
          </FeatureCard>

          <FeatureCard
            sticker="right"
            text="Pre-configured props to make components CMS ready and secure."
          >
            <MadProps />
          </FeatureCard>

          <FeatureCard
            sticker="left"
            text="Clean, production-ready code you can deploy with no worries."
          >
            <ProductionReady />
          </FeatureCard>

          <FeatureCard
            sticker="right"
            text="Built with and optimized for accessibility from the beginning."
          >
            <LikeTotally />
          </FeatureCard>

          <FeatureCard sticker="left" text="Open source and always free for all users.">
            <OpenSource />
          </FeatureCard>

          <FeatureCard
            sticker="right"
            text="Smoother and safer development with TypeScript support out of the box."
          >
            <Typescript />
          </FeatureCard>

          <FeatureCard
            sticker="left"
            text="Every component is recreated in Figma, ready to be dropped into your mockups."
          >
            <Figma />
          </FeatureCard>
        </div>
      </section>

      <footer className="w-full bg-white p-3 md:p-4 lg:p-5" id="footer">
        <div className="relative z-0 h-full w-full overflow-hidden rounded-3xl border-[1.5px] border-black bg-gradient-to-b from-[#FFB5CE] to-[#E8C3FF] after:absolute after:inset-0 after:-z-10 after:animate-[dotScrollSmall_500ms_linear_infinite] after:[background-image:radial-gradient(#FFB3CD_25%,transparent_25%),radial-gradient(#FFB3CD_25%,transparent_25%)] after:[background-size:12px_12px] after:[background-position:-0px_-0px,-6px_-6px] sm:place-content-center lg:rounded-[32px] lg:after:animate-[dotScrollLarge_400ms_linear_infinite] lg:after:[background-size:16px_16px] lg:after:[background-position:-0px_-0px,-8px_-8px] xl:rounded-[40px]">
          <div className="mx-auto flex max-w-4xl flex-col items-center px-4 pt-10 pb-6 text-left sm:px-8 sm:text-center md:pt-20 md:pb-10">
            <p className="mb-8 px-2 text-2xl leading-snug text-balance text-black sm:text-3xl md:mb-12 lg:text-4xl">
              Stay in the loop and get the latest updates from VIBES.
            </p>

            <div className="relative z-10 w-full sm:w-auto">
              <Form />
            </div>

            <p className="mt-14 w-full px-2 text-lg leading-normal md:mt-24">
              Made by{' '}
              <Link className="font-bold" href="https://www.makeswift.com" target="_blank">
                Makeswift
              </Link>
              {/* . View source code in{' '}
              <Link href="https://github.com/makeswift/vibes" target="_blank" className="font-bold">
                GitHub
              </Link>
              . */}
            </p>
          </div>
          <div className="relative h-48 w-full">
            <Vibes1 />
            <Vibes11 />
            <Vibes2 />
            <Vibes3 />
            <Vibes13 />
            <Vibes16 />
            <Vibes5 />
            <Vibes12 />
            <Vibes4 />
            <Vibes6 />
            <Vibes7 />
            <Vibes8 />
            <Vibes9 />
            <Vibes10 />
            <Vibes14 />
            <Vibes15 />
          </div>
        </div>
      </footer>
    </div>
  );
}
