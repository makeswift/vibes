import { MailIcon, PhoneIcon } from 'lucide-react';
import Link from 'next/link';

import { Streamable } from '@/vibes/soul/lib/streamable';
import { Logo } from '@/vibes/soul/primitives/logo';
import { SectionLayout } from '@/vibes/soul/sections/section-layout';

export interface MaintenanceProps {
  className?: string;
  logo: Streamable<string | { src: string; alt: string }>;
  logoWidth?: number;
  logoHeight?: number;
  logoHref?: string;
  logoLabel?: string;
  title?: string;
  statusMessage?: string;
  contactText?: string;
  contactPhone?: string;
  contactEmail?: string;
}

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --maintenance-focus: hsl(var(--primary));
 *   --maintenance-font-family: var(--font-family-body);
 *   --maintenance-title-font-family: var(--font-family-heading);
 *   --maintenance-title: hsl(var(--foreground));
 *   --maintenance-status-message: hsl(var(--contrast-500));
 *   --maintenance-contact: hsl(var(--foreground));
 *   --maintenance-contact-link: hsl(var(--contrast-400));
 *   --maintenance-contact-link-hover: hsl(var(--foreground));
 * }
 * ```
 */
export function Maintenance({
  className = '',
  logo: streamableLogo,
  logoWidth = 200,
  logoHeight = 40,
  logoHref = '/',
  logoLabel = 'Home',
  title = 'We are down for maintenance',
  statusMessage = "Sorry for the inconvenience, we're currently working on improving our store.",
  contactText = 'Contact us',
  contactPhone,
  contactEmail,
}: MaintenanceProps) {
  return (
    <SectionLayout className={className}>
      <div className="mx-auto my-auto max-w-3xl px-4 font-[family-name:var(--maintenance-font-family,var(--font-family-body))] @xl:px-6 @4xl:px-8">
        <Logo
          className="mb-20 block"
          height={logoHeight}
          href={logoHref}
          label={logoLabel}
          logo={streamableLogo}
          width={logoWidth}
        />
        <h1 className="mb-3 font-[family-name:var(--maintenance-title-font-family,var(--font-family-heading))] text-3xl font-medium leading-none text-[var(--maintenance-title,hsl(var(--foreground)))] @xl:text-4xl @4xl:text-5xl">
          {title}
        </h1>
        <p className="text-md font-light text-[var(--maintenance-status-message,hsl(var(--contrast-500)))] @xl:text-lg @4xl:text-xl">
          {statusMessage}
        </p>
        {(Boolean(contactPhone) || Boolean(contactEmail)) && (
          <div className="mt-20">
            <div className="mb-6 text-lg font-medium leading-none text-[var(--maintenance-contact,hsl(var(--foreground)))] @xl:text-xl @4xl:text-2xl">
              {contactText}
            </div>
            {Boolean(contactEmail) && (
              <div>
                <Link
                  className="text-md my-2 inline-flex flex-row items-center font-medium text-[var(--maintenance-contact-link,hsl(var(--contrast-400)))] ring-[var(--maintenance-focus,hsl(var(--primary)))] transition-colors duration-300 hover:text-[var(--maintenance-contact-link-hover,hsl(var(--foreground)))] focus-visible:outline-0 focus-visible:ring-2 @xl:text-lg"
                  href={`mailto:${contactEmail}`}
                >
                  <span>
                    <MailIcon />
                  </span>
                  <span className="ml-2 flex-1">{contactEmail}</span>
                </Link>
              </div>
            )}
            {Boolean(contactPhone) && (
              <div>
                <Link
                  className="text-md my-2 inline-flex flex-row items-center font-medium text-[var(--maintenance-contact-link,hsl(var(--contrast-400)))] ring-[var(--maintenance-focus,hsl(var(--primary)))] transition-colors duration-300 hover:text-[var(--maintenance-contact-link-hover,hsl(var(--foreground)))] focus-visible:outline-0 focus-visible:ring-2 @xl:text-lg"
                  href={`tel:${contactPhone}`}
                >
                  <span>
                    <PhoneIcon />
                  </span>
                  <span className="ml-2 flex-1">{contactPhone}</span>
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </SectionLayout>
  );
}
