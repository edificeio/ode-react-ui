import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCheckboxSelectedHover = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 28 28"
    aria-hidden="true"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <rect width={28} height={28} fill="#F2F2F2" rx={14} />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5.5 7.5a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2v-13Zm13.814 3.581a1 1 0 0 0-1.628-1.162l-4.23 5.921-2.173-2.732a1 1 0 0 0-1.565 1.246l3 3.769a1 1 0 0 0 1.596-.042l5-7Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCheckboxSelectedHover;
