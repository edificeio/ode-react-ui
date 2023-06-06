import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRafterLeft = ({
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
      d="M16.129 4.012a1.5 1.5 0 0 1-.141 2.117L9.278 12l6.71 5.871a1.5 1.5 0 0 1-1.976 2.258l-8-7a1.5 1.5 0 0 1 0-2.258l8-7a1.5 1.5 0 0 1 2.117.141Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgRafterLeft;
