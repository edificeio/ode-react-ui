import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgPlay = ({
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
      d="M4.5 3.804c0-1.57 1.728-2.528 3.06-1.696l13.113 8.196a2 2 0 0 1 0 3.392L7.56 21.892c-1.332.832-3.06-.125-3.06-1.696V3.804ZM19.613 12 6.5 3.804v16.392L19.613 12Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgPlay;
