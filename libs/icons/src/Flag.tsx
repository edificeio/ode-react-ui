import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgFlag = ({
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
      d="M21.37 2.1a1.14 1.14 0 0 0-1.15.17s-.92.73-3.5.73a10.56 10.56 0 0 1-3.83-.93A12.44 12.44 0 0 0 8.28 1c-3.43 0-4.74 1.08-5 1.29A1 1 0 0 0 3 3v19a1 1 0 0 0 1.06 1 1 1 0 0 0 1.05-1v-6.46A7.59 7.59 0 0 1 8.28 15a10.56 10.56 0 0 1 3.83.93A12.44 12.44 0 0 0 16.72 17c3.43 0 4.74-1.08 5-1.29A1 1 0 0 0 22 15V3a1 1 0 0 0-.63-.9Zm-1.48 12.36a7.46 7.46 0 0 1-3.17.54 10.56 10.56 0 0 1-3.83-.93A12.64 12.64 0 0 0 8.28 13a11.4 11.4 0 0 0-3.17.39V3.54A7.46 7.46 0 0 1 8.28 3a10.56 10.56 0 0 1 3.83.93A12.44 12.44 0 0 0 16.72 5a11.4 11.4 0 0 0 3.17-.39v9.85Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgFlag;
