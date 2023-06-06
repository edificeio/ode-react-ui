import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPad = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    aria-hidden="true"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M15.1 18.23H9.5v-.5h5.6v.5zm-2.3-1.5H9.5v-.5h3.3v.5zm.98-1.48H9.5v-.48h4.28v.48zm1.66-1.47H9.5v-.5h5.94v.5zm-2.65-1.49H9.5v-.5h3.3v.5zm4.12-3.22H8v11.88h8.9V9.07zM6.54 22.4V7.61H18.4v14.8H6.54zM4.5 10.31c-.6.61-.96 1.26-1.01 1.79l3.68 3.85s.36-.46.33-1.25c.94-.48 1.1-.92 1.28-1.3.82.02 1.15-.29 1.15-.29L6.25 9.26c-.24.05-.94.22-1.75 1.06zM.55 8.82c.07.04.48.6.72.93.03-.36.17-1.03.92-1.8.77-.77 1.44-.94 1.8-.96-.31-.24-.72-.6-.86-.72C2.74 5.87 2 5.6.9 6.52S.14 8.37.55 8.8zm7.48 6.39c0 .36-.33 1.06-.33 1.06l4.23 1.8-1.71-4.37s-.17.16-.89.16a2.36 2.36 0 0 1-1.3 1.35zM2.65 8.42c-1.04 1.08-.9 1.83-.9 1.83l.41.4c.05-.45.37-1.1.97-1.7.96-.99 1.75-1.1 1.75-1.1l-.43-.44s-.8-.02-1.8 1.01zm.86.91c-.99 1.04-.84 1.76-.84 1.76l.36.38c.07-.43.39-1.05.94-1.63.91-.94 1.68-1.06 1.68-1.06l-.4-.4s-.78-.03-1.74.95zm14.45-2.88-3.68 3.82s.32.32 1.13.3c.17.38.34.83 1.3 1.29-.05.8.34 1.25.34 1.25l3.68-3.85a3.32 3.32 0 0 0-1.04-1.78c-.82-.84-1.51-1-1.73-1.03zm5.32-2.77c-1.08-.91-1.83-.65-2.21-.26-.12.14-.56.48-.84.74.33.03 1.03.17 1.78.94.76.77.9 1.44.9 1.8.27-.33.66-.86.73-.93.4-.44.72-1.37-.36-2.29zm-8.42 7.34c-.72 0-.89-.17-.89-.17l-1.68 4.37 4.2-1.8s-.33-.7-.3-1.06a2.37 2.37 0 0 1-1.33-1.34zm4.88-6.45-.4.43s.79.15 1.72 1.11c.6.6.92 1.25.99 1.7l.39-.4s.14-.75-.9-1.8c-1-1.06-1.8-1.04-1.8-1.04zm-.8.96-.4.41s.77.12 1.68 1.06c.58.6.9 1.2.94 1.64l.39-.39s.12-.72-.87-1.73c-.96-1.01-1.73-.99-1.73-.99z" />
  </svg>
);
export default SvgPad;
