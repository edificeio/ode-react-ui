import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRafterUp = ({
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
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.988 17.129a1.5 1.5 0 0 1-2.117-.141L12 10.278l-5.871 6.71a1.5 1.5 0 0 1-2.258-1.976l7-8a1.5 1.5 0 0 1 2.258 0l7 8a1.5 1.5 0 0 1-.141 2.117Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgRafterUp;
