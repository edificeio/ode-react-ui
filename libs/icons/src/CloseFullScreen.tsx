import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgCloseFullScreen = ({
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
      d="M19.333 11a1 1 0 1 0 0-2h-2.919l6.293-6.293a1 1 0 0 0-1.414-1.414L15 7.586v-2.92a1 1 0 1 0-2 0V10a1 1 0 0 0 1 1h5.333ZM4.667 13a1 1 0 1 0 0 2h2.919l-6.293 6.293a1 1 0 1 0 1.414 1.414L9 16.414v2.92a1 1 0 1 0 2 0V14a1 1 0 0 0-1-1H4.667Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgCloseFullScreen;
