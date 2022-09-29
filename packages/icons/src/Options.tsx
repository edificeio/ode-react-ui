import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgOptions = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <circle cx={12} cy={4} r={2.5} fill="currentColor" />
    <circle cx={12} cy={12} r={2.5} fill="currentColor" />
    <circle cx={12} cy={20} r={2.5} fill="currentColor" />
  </svg>
);

export default SvgOptions;
