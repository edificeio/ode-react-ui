import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgEdit = ({
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
      d="M1.879 3.879A3 3 0 0 1 4 3h7a1 1 0 1 1 0 2H4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7a1 1 0 1 1 2 0v7a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V6a3 3 0 0 1 .879-2.121Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 2.879c-.297 0-.583.118-.793.328l-9.304 9.304-.529 2.115 2.115-.529 9.304-9.304A1.121 1.121 0 0 0 20 2.88Zm-2.207-1.086a3.121 3.121 0 0 1 4.414 4.414l-9.5 9.5a1 1 0 0 1-.464.263l-4 1a1 1 0 0 1-1.213-1.212l1-4a1 1 0 0 1 .263-.465l9.5-9.5Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgEdit;
