import type { SVGProps } from "react";
import { useTranslation } from "react-i18next";

export function IconInstagram(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconTikTok(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M16.5 3c.4 2.2 1.9 3.7 4.1 3.9v3c-1.5 0-2.9-.4-4.1-1.3v6.9c0 3.4-2.7 6.1-6.1 6.1S4.3 18.9 4.3 15.5c0-3.3 2.6-6 5.9-6.1v3.1c-1.6.1-2.9 1.4-2.9 3 0 1.7 1.4 3 3 3s3-1.3 3-3V3h3.2z" />
    </svg>
  );
}

export function IconFacebook(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M13.5 21v-7.6h2.6l.4-3H13.5V8.4c0-.9.2-1.5 1.5-1.5h1.6V4.2C16.3 4.1 15.3 4 14.2 4c-2.3 0-3.9 1.4-3.9 4v2.4H7.7v3h2.6V21h3.2z" />
    </svg>
  );
}

export interface SocialLink {
  label: string;
  href: string;
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}

export const socialLinks: SocialLink[] = [
  { label: "Instagram", href: "https://www.instagram.com/thesecretnatasociety/", Icon: IconInstagram },
  { label: "TikTok", href: "#", Icon: IconTikTok },
  { label: "Facebook", href: "#", Icon: IconFacebook },
];