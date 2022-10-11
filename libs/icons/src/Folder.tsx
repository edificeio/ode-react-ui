import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgFolder = ({
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
      d="M3.057 5.5A.057.057 0 0 0 3 5.557v13.03h18V7.875h-8.697a1 1 0 0 1-1-1c0-.759-.615-1.374-1.374-1.374H3.057ZM1 5.557C1 4.42 1.92 3.5 3.057 3.5h6.872c1.515 0 2.797.999 3.223 2.374H21a2 2 0 0 1 2 2v10.714a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V5.557Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgFolder;
