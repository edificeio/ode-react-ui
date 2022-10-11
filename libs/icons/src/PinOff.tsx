import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgPinOff = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width="24"
    height="24"
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
      d="M3.707 2.293a1 1 0 0 0-1.414 1.414l5.084 5.084-.728.273a1 1 0 0 0-.356.229l-1.5 1.5a1 1 0 0 0 0 1.414L7.586 15l-3.793 3.793a1 1 0 1 0 1.414 1.414L9 16.414l2.793 2.793a1 1 0 0 0 1.414 0l1.5-1.5a1 1 0 0 0 .23-.356l.272-.727 5.084 5.083a1 1 0 0 0 1.414-1.414l-6.118-6.118a1.011 1.011 0 0 0-.062-.069L10.694 9.28 3.707 2.293ZM12.5 17.086l-2.793-2.793L6.914 11.5l.64-.64 1.376-.516.35.35 4.376 4.376-.516 1.376-.64.64Zm3.207-13.293 4.5 4.5.5.5a1 1 0 0 1-1.176 1.59l-2.574 2.575a1 1 0 1 1-1.414-1.414L18.086 9 15 5.914l-2.542 2.542a1 1 0 1 1-1.414-1.414l2.573-2.573a1 1 0 0 1 1.59-1.176l.5.5Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgPinOff;
