import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgUserSearch = ({
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
      d="M11 3a8 8 0 1 0 0 16 8 8 0 0 0 0-16ZM1 11C1 5.477 5.477 1 11 1s10 4.477 10 10-4.477 10-10 10S1 16.523 1 11Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.293 17.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414ZM5.932 14.876C6.552 14.05 7.464 13.5 8.5 13.5h5c1.036 0 1.948.55 2.568 1.376a1 1 0 0 1-1.6 1.2c-.318-.424-.678-.576-.968-.576h-5c-.29 0-.65.152-.968.576a1 1 0 1 1-1.6-1.2ZM11 6.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-4 2a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgUserSearch;
