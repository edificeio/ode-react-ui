import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCrop = ({
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
    <g clipPath="url(#crop_svg__a)">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.13 1.009a1 1 0 1 0-2-.018l-.036 4.103-4.103.036a1 1 0 1 0 .018 2l4.068-.035L5 15.99V16a3 3 0 0 0 3 3h9v4a1 1 0 1 0 2 0v-4h4a1 1 0 1 0 0-2h-4V8a3 3 0 0 0-3-3l-8.905.077.035-4.068Zm-.053 6.068L7 16.004A1 1 0 0 0 8 17h9V8a1 1 0 0 0-.996-1l-8.927.077Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="crop_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCrop;
