import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgUnlink = ({
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
    <g
      fill="currentColor"
      fillRule="evenodd"
      clipPath="url(#unlink_svg__a)"
      clipRule="evenodd"
    >
      <path d="M4.953 13.538a4 4 0 1 0 5.755 5.557l2.084-2.158a1 1 0 0 1 1.439 1.39l-2.084 2.157a6.002 6.002 0 0 1-8.484.148 6 6 0 0 1-.148-8.484L5.599 9.99a1 1 0 1 1 1.438 1.39l-2.084 2.158Zm4.838-6.45a1 1 0 0 1-.024-1.414l2.084-2.158a6 6 0 0 1 8.632 8.336l-2.084 2.158a1 1 0 1 1-1.439-1.39l2.084-2.157a4 4 0 0 0-5.755-5.558l-2.084 2.159a1 1 0 0 1-1.414.024ZM7.91 5.965a1 1 0 0 1-1.238-.686l-.551-1.922a1 1 0 0 1 1.923-.551l.55 1.922a1 1 0 0 1-.685 1.237ZM16.089 18.035a1 1 0 0 1 1.237.685l.55 1.923a1 1 0 1 1-1.922.55l-.55-1.922a1 1 0 0 1 .685-1.236ZM5.825 8.123a1 1 0 0 1-1.212.729l-1.94-.484a1 1 0 0 1 .483-1.94l1.94.483a1 1 0 0 1 .73 1.212ZM18.173 15.877a1 1 0 0 1 1.212-.729l1.94.484a1 1 0 0 1-.483 1.94l-1.94-.483a1 1 0 0 1-.73-1.212Z" />
    </g>
    <defs>
      <clipPath id="unlink_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgUnlink;
