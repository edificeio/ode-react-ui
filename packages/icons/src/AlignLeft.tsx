import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAlignLeft = ({
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
      d="M2 4a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1ZM2 12a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1ZM2 20a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Z"
    />
  </svg>
);
export default SvgAlignLeft;
