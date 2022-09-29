import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgCalendarLight = ({
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
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17 2a1 1 0 1 0-2 0v1H9V2a1 1 0 0 0-2 0v1H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3h-2V2Zm3 7V6a1 1 0 0 0-1-1h-2v1a1 1 0 1 1-2 0V5H9v1a1 1 0 0 1-2 0V5H5a1 1 0 0 0-1 1v3h16ZM4 11h16v9a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgCalendarLight;
