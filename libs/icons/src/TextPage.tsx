import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgTextPage = ({
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
      d="M6.286 3c-.35 0-.68.135-.92.368-.238.231-.366.54-.366.854v15.556c0 .315.128.623.367.854.239.233.569.368.919.368h11.428c.35 0 .68-.135.92-.368.238-.231.366-.54.366-.854V8h-3a2 2 0 0 1-2-2V3H6.286ZM16 6h1.986L16 4.08V6Zm5 13.778V6.556a1 1 0 0 0-.305-.72L15.98 1.281A1 1 0 0 0 15.286 1h-9a3.32 3.32 0 0 0-2.314.934A3.191 3.191 0 0 0 3 4.222v15.556c0 .864.353 1.686.972 2.288.619.601 1.451.934 2.314.934h11.428c.863 0 1.695-.333 2.314-.934.619-.602.972-1.424.972-2.288ZM8 6a1 1 0 0 0 0 2h3a1 1 0 1 0 0-2H8Zm-1 6a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Zm5 4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-4Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgTextPage;
