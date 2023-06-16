import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAlignJustify = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
    aria-hidden="true"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M2 4a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1ZM2 12c0-.552.64-1 1.429-1H20.57c.79 0 1.429.448 1.429 1s-.64 1-1.429 1H3.43C2.639 13 2 12.552 2 12ZM2 20c0-.552.497-1 1.111-1H20.89c.614 0 1.111.448 1.111 1s-.497 1-1.111 1H3.11C2.497 21 2 20.552 2 20Z"
    />
  </svg>
);
export default SvgAlignJustify;
