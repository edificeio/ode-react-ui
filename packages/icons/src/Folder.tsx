import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgFolder = ({
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
      d="M12.303 7.374h-1a1 1 0 0 0 1 1v-1ZM3 6.057C3 6.025 3.025 6 3.057 6V4C1.92 4 1 4.92 1 6.057h2Zm0 1.317V6.057H1v1.317h2Zm0 0H1h2Zm0 11.714V7.374H1v11.714h2Zm0 0H1a2 2 0 0 0 2 2v-2Zm18 0H3v2h18v-2Zm0 0v2a2 2 0 0 0 2-2h-2Zm0-10.714v10.714h2V8.374h-2Zm0 0h2a2 2 0 0 0-2-2v2Zm-8.697 0H21v-2h-8.697v2ZM9.929 6c.76 0 1.374.615 1.374 1.374h2A3.374 3.374 0 0 0 9.929 4v2ZM3.057 6h6.872V4H3.057v2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgFolder;
