import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgSend = ({
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
      d="M20.604 3.159a.913.913 0 0 1 .345 1.05l-6.364 18.182a.909.909 0 0 1-1.689.07l-3.494-7.863-7.862-3.495a.91.91 0 0 1 .069-1.688l18.158-6.356a.91.91 0 0 1 .837.1ZM11.175 14.11l6.742-6.742-4.29 12.258-2.452-5.516ZM9.89 12.825l-5.515-2.452 12.257-4.29-6.742 6.742Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgSend;
