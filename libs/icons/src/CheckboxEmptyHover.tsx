import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCheckboxEmptyHover = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <rect width={28} height={28} rx={14} fill="#F2F2F2" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.5 7.5h-13v13h13v-13Zm-13-2a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-13a2 2 0 0 0-2-2h-13Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgCheckboxEmptyHover;
