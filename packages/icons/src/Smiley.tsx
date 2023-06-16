import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSmiley = ({
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
      d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M7 10a1 1 0 0 1 1-1h1a1 1 0 0 1 0 2H8a1 1 0 0 1-1-1ZM14 10a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1ZM7.692 15.41a1 1 0 0 1 1.397-.218c.355.259.796.476 1.3.627A5.63 5.63 0 0 0 12 16.05c.558 0 1.107-.08 1.61-.23a4.313 4.313 0 0 0 1.3-.628 1 1 0 0 1 1.18 1.616 6.311 6.311 0 0 1-1.904.927 7.63 7.63 0 0 1-2.186.316 7.63 7.63 0 0 1-2.186-.316 6.311 6.311 0 0 1-1.903-.927 1 1 0 0 1-.22-1.397Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSmiley;
