import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgStats = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M3 20.41h21.02v3H0V-.6h3zm3.76-1.5a2.25 2.25 0 1 1 .2-4.5l2.41-4.03a2.25 2.25 0 1 1 3.78 0l2.42 4.03a2.55 2.55 0 0 1 .35 0l4-7a2.25 2.25 0 1 1 1.7.98l-4 7a2.25 2.25 0 1 1-3.74.04l-2.42-4.04a2.55 2.55 0 0 1-.4 0l-2.42 4.04a2.25 2.25 0 0 1-1.88 3.48z" />
  </svg>
);
export default SvgStats;
