import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSortDescending = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 6a1 1 0 0 1-1 1h-4a1 1 0 1 1 0-2h4a1 1 0 0 1 1 1ZM20 12a1 1 0 0 1-1 1h-6a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1ZM22 18a1 1 0 0 0-1-1h-8a1 1 0 1 0 0 2h8a1 1 0 0 0 1-1ZM9.707 16.293a1 1 0 0 0-1.414 0L6 18.586l-2.293-2.293a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l3-3a1 1 0 0 0 0-1.414Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 4a1 1 0 0 1 1 1v15a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSortDescending;
