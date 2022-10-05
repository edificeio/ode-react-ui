import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgMic = ({
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
      d="M12 .5a4.074 4.074 0 0 0-2.812 1.115A3.8 3.8 0 0 0 8 4.364V12a3.8 3.8 0 0 0 1.188 2.748A4.074 4.074 0 0 0 12 15.864a4.074 4.074 0 0 0 2.812-1.116A3.8 3.8 0 0 0 16 12V4.364a3.8 3.8 0 0 0-1.188-2.749A4.074 4.074 0 0 0 12 .5Zm-1.43 2.562A2.074 2.074 0 0 1 12 2.5c.545 0 1.059.207 1.43.562.371.354.57.823.57 1.302V12a1.8 1.8 0 0 1-.57 1.302 2.074 2.074 0 0 1-1.43.562 2.074 2.074 0 0 1-1.43-.563A1.8 1.8 0 0 1 10 12V4.364a1.8 1.8 0 0 1 .57-1.302ZM6 10.091a1 1 0 0 0-2 0V12c0 2.053.855 4.011 2.36 5.448A8.134 8.134 0 0 0 11 19.622V21.5H8a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-3v-1.878a8.133 8.133 0 0 0 4.64-2.174C19.145 16.011 20 14.053 20 12v-1.91a1 1 0 0 0-2 0V12c0 1.491-.62 2.932-1.74 4.001-1.12 1.069-2.646 1.678-4.248 1.68h-.024c-1.602-.002-3.128-.611-4.247-1.68C6.62 14.931 6 13.491 6 12v-1.91Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgMic;
