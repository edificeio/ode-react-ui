import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCode = ({
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
      fillRule="evenodd"
      d="M17.327 5.76a1 1 0 0 1 1.413.067l5 5.5a1 1 0 0 1 0 1.346l-5 5.5a1 1 0 1 1-1.48-1.346L21.648 12 17.26 7.173a1 1 0 0 1 .067-1.413ZM6.673 5.76a1 1 0 0 1 .067 1.413L2.35 12l4.389 4.827a1 1 0 0 1-1.48 1.346l-5-5.5a1 1 0 0 1 0-1.346l5-5.5a1 1 0 0 1 1.413-.067ZM8.979 21.609a1 1 0 0 1-.658-1.252l5.375-17.29a1 1 0 1 1 1.91.594L10.23 20.95a1 1 0 0 1-1.251.658Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCode;
