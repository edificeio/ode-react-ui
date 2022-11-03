import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgOneProfile = ({
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
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath="url(#oneProfile_svg__a)">
      <path
        d="M12 0C5.371 0 0 5.371 0 12s5.371 12 12 12 12-5.371 12-12S18.629 0 12 0Zm0 4.645a4.258 4.258 0 1 1 0 8.516 4.258 4.258 0 0 1 0-8.516Zm0 16.645a9.272 9.272 0 0 1-7.089-3.3c.91-1.713 2.69-2.893 4.766-2.893.117 0 .233.02.344.053a6.407 6.407 0 0 0 1.979.334c.692 0 1.355-.13 1.979-.334.111-.034.228-.053.344-.053 2.075 0 3.856 1.18 4.766 2.893A9.272 9.272 0 0 1 12 21.29Z"
        fill="#A14CBD"
      />
    </g>
    <defs>
      <clipPath id="oneProfile_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgOneProfile;
