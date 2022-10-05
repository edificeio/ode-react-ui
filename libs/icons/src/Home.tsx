import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgHome = ({
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
      d="M12.614.21a1 1 0 0 0-1.228 0l-9 7A1 1 0 0 0 2 8v11a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V8a1 1 0 0 0-.386-.79l-9-7ZM16 20h3a1 1 0 0 0 1-1V8.49l-8-6.223-8 6.222V19a1 1 0 0 0 1 1h3v-9a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v9Zm-6 0v-8h4v8h-4Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgHome;
