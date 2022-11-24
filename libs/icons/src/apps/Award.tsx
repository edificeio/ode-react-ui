import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAward = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 22 24"
    width="24"
    height="24"
    aria-hidden="true"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M6.16 12.39q-1.01-2.2-1.01-4.98H1.7v1.27q0 1.06 1.27 2.2t3.17 1.5zm14.45-3.7V7.4h-3.44q0 2.79-.99 4.98 1.9-.39 3.15-1.52t1.28-2.19zm1.73-1.71v1.7q0 .97-.58 1.93t-1.49 1.75-2.33 1.3-2.89.6q-.55.72-1.27 1.28-.5.45-.7.96t-.19 1.2q0 .72.4 1.23t1.3.5q1.02 0 1.81.6t.77 1.54v.87q0 .19-.12.31t-.31.12H5.58q-.2 0-.31-.12t-.12-.31v-.87q0-.94.8-1.54t1.77-.6q.92 0 1.32-.5t.41-1.23q0-.67-.19-1.2t-.7-.96q-.72-.56-1.27-1.28-1.54-.07-2.91-.6t-2.3-1.3-1.52-1.75T0 8.68v-1.7q0-.56.39-.92t.91-.38h3.85V4.4q0-.89.65-1.51t1.52-.65h7.71q.9 0 1.52.65t.62 1.51v1.28h3.88q.53 0 .91.38t.39.92z" />
  </svg>
);
export default SvgAward;
