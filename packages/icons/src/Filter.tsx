import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgFilter = ({
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
      d="M1.093 2.58A1 1 0 0 1 2 2h20a1 1 0 0 1 .764 1.646L15 12.826V21a1 1 0 0 1-1.447.894l-4-2A1 1 0 0 1 9 19v-6.174l-7.764-9.18a1 1 0 0 1-.143-1.067ZM4.155 4l6.609 7.814a1 1 0 0 1 .236.646v5.922l2 1V12.46a1 1 0 0 1 .236-.646L19.845 4H4.155Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgFilter;
