import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgClose = ({
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
      d="M4.222 4.222a1.1 1.1 0 0 1 1.556 0l14 14a1.1 1.1 0 1 1-1.556 1.556l-14-14a1.1 1.1 0 0 1 0-1.556Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.778 4.222a1.1 1.1 0 0 1 0 1.556l-14 14a1.1 1.1 0 1 1-1.556-1.556l14-14a1.1 1.1 0 0 1 1.556 0Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgClose;
