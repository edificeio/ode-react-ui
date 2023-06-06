import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgViewCalendar = ({
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
      d="M4 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v3H4V5Zm9 5h7v4h-7v-4Zm-2 4v-4H4v4h7Zm-7 2h7v4H5a1 1 0 0 1-1-1v-3Zm-2-1V5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-4Zm18 1v3a1 1 0 0 1-1 1h-6v-4h7Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgViewCalendar;
