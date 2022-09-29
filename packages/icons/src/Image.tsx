import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgImage = ({
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
    <g clipPath="url(#image_svg__a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.515 4.222c-.976 0-1.333.606-1.333.864v13.827c0 .26.357.865 1.333.865h1.488l10.59-10.786a1.077 1.077 0 0 1 1.542 0l4.683 4.77V5.086c0-.258-.357-.864-1.333-.864H3.515ZM24 16.427V5.087C24 3.162 22.186 2 20.485 2H3.515C1.814 2 0 3.163 0 5.086v13.827C0 20.837 1.814 22 3.515 22h16.97C22.186 22 24 20.837 24 18.913v-2.486Zm-2.182.478-5.454-5.556-8.275 8.429h12.396c.976 0 1.333-.606 1.333-.865v-2.008ZM7.636 7.555c-.602 0-1.09.498-1.09 1.111 0 .614.488 1.111 1.09 1.111.603 0 1.091-.497 1.091-1.11 0-.614-.488-1.112-1.09-1.112ZM4.364 8.666c0-1.84 1.465-3.333 3.272-3.333 1.808 0 3.273 1.492 3.273 3.333C10.91 10.507 9.444 12 7.636 12c-1.807 0-3.272-1.493-3.272-3.334Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="image_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgImage;
