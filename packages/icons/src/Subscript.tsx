import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSubscript = ({
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
      d="M3.78 4.375a1 1 0 0 0-1.56 1.25L7.32 12l-5.1 6.375a1 1 0 0 0 1.56 1.25L8.6 13.6l4.82 6.024a1 1 0 1 0 1.56-1.25L9.88 12l5.1-6.375a1 1 0 1 0-1.56-1.25L8.6 10.4 3.78 4.375Zm16.631 7.636a3.298 3.298 0 0 0-3.28 1.635 1 1 0 0 0 1.737.993 1.298 1.298 0 0 1 2.295 1.212l-3.916 4.475A1 1 0 0 0 18 21.984h4.561a1 1 0 1 0 0-2h-2.357l2.54-2.902a.997.997 0 0 0 .115-.163 3.298 3.298 0 0 0-2.448-4.908Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSubscript;
