import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgPrint = ({
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
      d="M5 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v5h1a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h-1v2a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2H4a3 3 0 0 1-3-3v-5a3 3 0 0 1 3-3h1V3Zm2 15v3h10v-6H7v3Zm12-1v-3a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3H4a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-1ZM17 3v5H7V3h10Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgPrint;
