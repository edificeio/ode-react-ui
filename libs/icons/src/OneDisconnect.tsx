import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgOneDisconnect = ({
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
    role="img"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M18.387 3.362C21.181 5.326 23 8.538 23 12.175 23 18.146 18.085 22.987 12.022 23 5.968 23.013 1.01 18.155 1 12.192.996 8.556 2.814 5.335 5.604 3.366a1.077 1.077 0 0 1 1.552.336l.701 1.227a1.037 1.037 0 0 1-.292 1.353C5.724 7.626 4.548 9.756 4.548 12.17 4.544 16.2 7.853 19.508 12 19.508c4.063 0 7.478-3.239 7.452-7.381a7.299 7.299 0 0 0-3.02-5.85 1.03 1.03 0 0 1-.29-1.348l.702-1.227a1.073 1.073 0 0 1 1.543-.34Zm-4.613 9.162V2.048C13.774 1.468 13.3 1 12.71 1h-1.42c-.59 0-1.064.467-1.064 1.048v10.476c0 .58.474 1.047 1.064 1.047h1.42c.59 0 1.064-.467 1.064-1.047Z"
      fill="#FD8C3C"
    />
  </svg>
);

export default SvgOneDisconnect;
