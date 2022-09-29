import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgBurgerMenu = ({
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
      d="M21 5c0 .828-.711 1.5-1.588 1.5H4.588C3.711 6.5 3 5.828 3 5s.711-1.5 1.588-1.5h14.824C20.289 3.5 21 4.172 21 5ZM21 12c0 .828-.711 1.5-1.588 1.5H4.588C3.711 13.5 3 12.828 3 12s.711-1.5 1.588-1.5h14.824c.877 0 1.588.672 1.588 1.5ZM21 19c0 .828-.711 1.5-1.588 1.5H4.588C3.711 20.5 3 19.828 3 19s.711-1.5 1.588-1.5h14.824c.877 0 1.588.672 1.588 1.5Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgBurgerMenu;
