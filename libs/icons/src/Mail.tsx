import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMail = ({
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
    aria-hidden="true"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath="url(#mail_svg__a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.084 5.447c.2-.55.73-.947 1.36-.947h17.112c.63 0 1.16.397 1.36.947L12 12.014 2.084 5.447ZM2 7.79V18.07c0 .783.64 1.429 1.444 1.429h17.112c.803 0 1.444-.646 1.444-1.429V7.79l-9.448 6.257a1 1 0 0 1-1.104 0L2 7.79Zm22-1.842V18.07c0 1.9-1.548 3.429-3.444 3.429H3.444A3.437 3.437 0 0 1 0 18.071V5.93C0 4.029 1.548 2.5 3.444 2.5h17.112A3.437 3.437 0 0 1 24 5.948Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="mail_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMail;
