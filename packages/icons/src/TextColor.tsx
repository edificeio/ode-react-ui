import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTextColor = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 20 20"
    aria-hidden="true"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M16 14h-2.627l-1.044-2.726h-4.78L6.562 14H4L8.658 2h2.553L16 14Zm-4.446-4.748L9.906 4.8 8.291 9.252h3.263Z"
    />
    <path fill="#46AFE6" d="M0 16h4v4H0z" />
    <path fill="#A348C0" d="M4 16h4v4H4z" />
    <path fill="#FF3A55" d="M8 16h4v4H8z" />
    <path fill="#FF8D2E" d="M12 16h4v4h-4z" />
    <path fill="#F1CA00" d="M16 16h4v4h-4z" />
  </svg>
);
export default SvgTextColor;
