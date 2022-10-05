import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgDelete = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.461 3.689a.955.955 0 0 1 .675-.28h3.819a.955.955 0 0 1 .954.955v.954H9.182v-.954c0-.254.1-.496.28-.675Zm7.357.675v.954H20.636a.955.955 0 0 1 0 1.91h-.954v12.408a2.864 2.864 0 0 1-2.864 2.864H7.273a2.864 2.864 0 0 1-2.864-2.864V7.227h-.954a.955.955 0 1 1 0-1.909H7.273v-.954A2.864 2.864 0 0 1 10.136 1.5h3.819a2.864 2.864 0 0 1 2.863 2.864Zm-10.5 2.863v12.41a.954.954 0 0 0 .955.954h9.545a.955.955 0 0 0 .955-.955V7.227H6.318Zm3.818 2.864c.528 0 .955.427.955.955v5.727a.955.955 0 1 1-1.91 0v-5.727c0-.528.428-.955.955-.955Zm4.773 6.682v-5.727a.955.955 0 0 0-1.909 0v5.727a.955.955 0 1 0 1.91 0Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgDelete;
