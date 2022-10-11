import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgRafterRight = ({
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
    role="img"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.871 19.988a1.5 1.5 0 0 1 .141-2.117L14.722 12l-6.71-5.871A1.5 1.5 0 0 1 9.988 3.87l8 7a1.5 1.5 0 0 1 0 2.258l-8 7a1.5 1.5 0 0 1-2.117-.141Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgRafterRight;
