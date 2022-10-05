import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgWrite = ({
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
      d="M11 20a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2h-9a1 1 0 0 1-1-1ZM18 3.879c-.297 0-.583.118-.793.328L4.903 16.512l-.529 2.114 2.115-.529L18.793 5.793A1.123 1.123 0 0 0 18 3.88Zm-2.207-1.086a3.121 3.121 0 0 1 4.414 4.414l-12.5 12.5a1 1 0 0 1-.464.263l-4 1a1 1 0 0 1-1.213-1.212l1-4a1 1 0 0 1 .263-.465l12.5-12.5Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgWrite;
