import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgUpload = ({
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
    <g
      clipPath="url(#upload_svg__a)"
      fillRule="evenodd"
      clipRule="evenodd"
      fill="currentColor"
    >
      <path d="M11.293 11.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414L12 13.414l-3.293 3.293a1 1 0 0 1-1.414-1.414l4-4Z" />
      <path d="M12 11a1 1 0 0 1 1 1v9a1 1 0 1 1-2 0v-9a1 1 0 0 1 1-1Z" />
      <path d="M8.663 2.009A9 9 0 0 1 17.48 8H18a6.002 6.002 0 0 1 5.497 8.398 6 6 0 0 1-2.628 2.87 1 1 0 0 1-.958-1.756A4 4 0 0 0 18 10H16.74a1 1 0 0 1-.968-.75 7 7 0 1 0-12.023 6.388 1 1 0 1 1-1.498 1.324A9 9 0 0 1 8.663 2.01Z" />
      <path d="M11.293 11.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414L12 13.414l-3.293 3.293a1 1 0 0 1-1.414-1.414l4-4Z" />
    </g>
    <defs>
      <clipPath id="upload_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgUpload;
