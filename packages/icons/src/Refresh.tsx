import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgRefresh = ({
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
    <g clipPath="url(#refresh_svg__a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.303 21c3.016 0 5.651-1.924 6.839-4.752a.986.986 0 0 1 1.297-.53c.503.216.738.803.524 1.311C19.497 20.522 16.19 23 12.303 23c-4.644 0-8.444-3.522-9.299-8.113L1.86 17.142a.989.989 0 0 1-1.33.449 1.001 1.001 0 0 1-.417-1.348L2.51 11.52c.135-.265.376-.457.66-.527a.961.961 0 0 1 .812.169L8.1 14.297c.433.33.515.958.185 1.404a.979.979 0 0 1-1.382.212L4.93 14.41c.65 3.785 3.744 6.59 7.374 6.59Zm4.795-12.913a.979.979 0 0 0-1.382.211 1.011 1.011 0 0 0 .185 1.405l4.117 3.135a.961.961 0 0 0 .812.169c.284-.07.525-.262.66-.527l2.398-4.723c.252-.496.065-1.1-.418-1.348a.989.989 0 0 0-1.329.449l-1.145 2.255C20.14 4.522 16.34 1 11.696 1 7.81 1 4.505 3.478 3.037 6.97a1.004 1.004 0 0 0 .525 1.312.986.986 0 0 0 1.297-.53C6.046 4.924 8.681 3 11.697 3c3.63 0 6.724 2.805 7.374 6.59l-1.973-1.503Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="refresh_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgRefresh;
