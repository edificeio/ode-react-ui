import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgFullScreen = ({
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
      d="M16.667 1a1 1 0 1 0 0 2h2.919l-6.293 6.293a1 1 0 0 0 1.414 1.414L21 4.414v2.92a1 1 0 1 0 2 0V2a1 1 0 0 0-1-1h-5.333ZM7.333 23a1 1 0 1 0 0-2H4.414l6.293-6.293a1 1 0 0 0-1.414-1.414L3 19.586v-2.92a1 1 0 1 0-2 0V22a1 1 0 0 0 1 1h5.333Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgFullScreen;
