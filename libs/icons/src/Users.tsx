import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgUsers = ({
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
      clipPath="url(#users_svg__a)"
      fillRule="evenodd"
      clipRule="evenodd"
      fill="currentColor"
    >
      <path d="M19.055 12.803a1 1 0 0 1 1.272-.618c1.128.39 2.061 1.247 2.7 2.351.64 1.106.972 2.436.973 3.782V21a1 1 0 0 1-2 0v-2.68c0-1.03-.258-2.01-.704-2.782-.448-.774-1.034-1.26-1.623-1.463a1 1 0 0 1-.618-1.272ZM15.187 1.384a1 1 0 0 1 1.036-.962 5.13 5.13 0 0 1 2.11 9.71 1 1 0 0 1-.896-1.788 3.129 3.129 0 0 0-1.288-5.924 1 1 0 0 1-.962-1.036ZM1.505 15.694C2.481 14.622 3.825 14 5.25 14h8.5c1.424 0 2.769.622 3.744 1.694.974 1.068 1.506 2.498 1.506 3.973V22a1 1 0 1 1-2 0v-2.333c0-1.001-.363-1.945-.984-2.627-.618-.679-1.436-1.04-2.266-1.04h-8.5c-.83 0-1.648.361-2.266 1.04-.621.682-.984 1.626-.984 2.627V22a1 1 0 1 1-2 0v-2.333c0-1.475.533-2.905 1.505-3.974ZM9.5 3a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7ZM4 6.5a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0Z" />
    </g>
    <defs>
      <clipPath id="users_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgUsers;
