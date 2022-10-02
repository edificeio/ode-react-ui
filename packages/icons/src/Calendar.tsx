import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgCalendar = ({
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
      d="M16 0a1 1 0 0 1 1 1v1h2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h2V1a1 1 0 0 1 2 0v1h6V1a1 1 0 0 1 1-1ZM4 16v3a1 1 0 0 0 1 1h3v-4H4Zm4-2H4v-4h4v4Zm2 2v4h4v-4h-4Zm4-2h-4v-4h4v4Zm2 2v4h3a1 1 0 0 0 1-1v-3h-4Zm4-2h-4v-4h4v4Zm0-9v3H4V5a1 1 0 0 1 1-1h2v1a1 1 0 0 0 2 0V4h6v1a1 1 0 1 0 2 0V4h2a1 1 0 0 1 1 1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgCalendar;
