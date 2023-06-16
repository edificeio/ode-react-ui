import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTextTypo = ({
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
      d="M12.199 20.963c-.276 0-.514-.092-.713-.276a1.015 1.015 0 0 1-.276-.713V3h1.978v16.974c0 .276-.092.514-.276.713a.965.965 0 0 1-.713.276ZM5.92 4.817c-.276 0-.498-.084-.667-.253A.923.923 0 0 1 5 3.92c0-.276.084-.498.253-.667.169-.169.391-.253.667-.253h12.581c.276 0 .498.084.667.253.169.169.253.391.253.667 0 .245-.084.46-.253.644-.169.169-.391.253-.667.253H5.92Z"
    />
  </svg>
);
export default SvgTextTypo;
