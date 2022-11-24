import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLoading = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M16.67 5.56a7.96 7.96 0 1 0 3.3 6.44A1.02 1.02 0 1 1 22 12a10 10 0 1 1-4.14-8.1 1.02 1.02 0 1 1-1.2 1.66Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLoading;
