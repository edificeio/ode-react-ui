import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGlobe = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
    aria-hidden="true"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M9.726 3.29A9.008 9.008 0 0 0 3.055 11H7.05a16.3 16.3 0 0 1 2.676-7.71Zm4.548 0A16.3 16.3 0 0 1 16.95 11h3.995a9.008 9.008 0 0 0-6.67-7.71Zm.668 7.71A14.3 14.3 0 0 0 12 3.55 14.3 14.3 0 0 0 9.058 11h5.884Zm-5.884 2h5.884A14.3 14.3 0 0 1 12 20.45 14.3 14.3 0 0 1 9.058 13ZM7.05 13H3.055a9.008 9.008 0 0 0 6.67 7.71A16.3 16.3 0 0 1 7.05 13Zm7.224 7.71A16.3 16.3 0 0 0 16.95 13h3.995a9.008 9.008 0 0 1-6.67 7.71ZM12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgGlobe;
