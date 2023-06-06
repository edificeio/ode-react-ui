import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgEdumoov = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 23 24"
    width="24"
    height="24"
    aria-hidden="true"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M21.58 1.76c-1.66 2.04-4.9 4.65-10.61 3.56-2.41 1.36-5.75 1.57-9.3.37 2.41 2.12 3.1 3.46 4.19 4.99 7.6 1.83 13.56-1.78 15.72-8.92zm.34 4.29c-.77.2-1.56.39-2.38.58a12.03 12.03 0 0 1-6.13 4.32l-.28.09h-.03l-.27.07-.03.01c-.6.15-1.22.25-1.85.3l-.04.01-.28.02h-.04l-.17.01c-.9.05-1.85.01-2.83-.12h-.04l-.17-.03-.1-.01h-.04l-.14-.03-.15-.03h-.03l-.16-.03-.13-.03H6.6l-.15-.03-.2-.04a27.02 27.02 0 0 0-.46-.1l-.13-.03-.07-.1-.32-.45-.21-.32-.38-.55A16.24 16.24 0 0 0 2.8 7.23l-.79-.29A33.83 33.83 0 0 1 5.9 11.9c4.71 1.7 11.79 1.74 16.03-5.85zM2.16 8.18c1.31 1.35 2.3 2.79 3.6 4.98 6.97 2.91 11.2 1.36 15.8-2.83-.9.04-1.8.06-2.74.07a11.76 11.76 0 0 1-4.66 2.39c-2.97.75-5.98.3-8.39-.58l-.1-.03-.06-.1-.37-.55v-.01A35.3 35.3 0 0 0 2.9 8.4l-.74-.23zm-.1 1.21c1.63 1.49 2.61 3.3 3.44 4.98 5.7 3.33 12.84 1.77 14.95.21-.91-.35-1.84-.67-2.78-.99-.98.52-1.99.92-3.05 1.15-2.59.56-5.47.2-9-1.26l-.1-.05-.06-.1A31.33 31.33 0 0 0 3 9.61l-.92-.22zm19.36 9.73c-.26.52-1.18 2.27-1.28 1.87l-.4-1.47c-.18-.4-.49-.45-.85-.34l.59 2.2c.1.41.36.6.82.48.46-.04 1.37-2.17 1.12-2.74zm-3.98 0a1.38 1.38 0 1 0 0 2.75 1.38 1.38 0 0 0 0-2.75zm-6.84 0c-.17 0-.33.04-.47.1-.05.03-.2.13-.4.36a.66.66 0 0 0-.3-.28c-.09-.05-.17-.1-.31-.13v1.67c0 .14 0 .26.02.36s.04.2.1.29c.04.08.1.15.2.22s.2.11.37.15l.04.01v-1.45c0-.12 0-.23-.02-.33.24-.32.48-.38.56-.38.14 0 .24.05.3.15s.1.24.1.44v1.57h.74v-1.79c.22-.3.47-.37.54-.37.14 0 .24.05.3.15s.1.24.1.43v1.58h.74v-.42a1.7 1.7 0 0 1-.07-1.8c-.07-.24-.24-.41-.65-.51l-.21-.02c-.18 0-.34.04-.47.1-.05.03-.2.12-.39.33-.09-.19-.26-.33-.61-.41l-.21-.02zm4.04 0a1.38 1.38 0 1 0 1.21 2 1.72 1.72 0 0 1 0-1.26 1.37 1.37 0 0 0-1.21-.74zm-10.81.01v2.75h.83c.44-.05.98-.25 1.22-.56a2.76 2.76 0 0 1-.2-1.15v-.7a1.35 1.35 0 0 0-.54-.26 2.41 2.41 0 0 0-.67-.08h-.65zm2.2 0c0 .64-.06 1.09.04 1.6.06.4.25.79.61.97.23.13.5.17.75.18.33-.02.67-.1.91-.34.36-.4.44-.77.44-1.36v-1.05H8.1v1.23a1.1 1.1 0 0 1-.21.61.66.66 0 0 1-1.12-.25c-.1-.21-.09-.46-.09-.7v-.9h-.66zm-4.59.02v.66h2v-.66h-2zm3.05.65c.19 0 .37.03.54.1.22.09.36.31.39.55a.65.65 0 0 1-.4.65c-.16.07-.34.1-.53.1v-1.4zm12.95 0a.68.68 0 1 1 0 1.38.69.69 0 1 1 0-1.37zm-2.8.01a.68.68 0 1 1 0 1.37.68.68 0 0 1 0-1.37zm-13.2.36v.67h2v-.67h-2zm0 1.04v.67h2v-.67h-2z" />
  </svg>
);
export default SvgEdumoov;
