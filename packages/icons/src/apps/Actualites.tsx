import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgActualites = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 28 24"
    width="24"
    height="24"
    aria-hidden="true"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M13.73 7.4H8.6v5.15h5.14V7.42zm1.73 8.6v1.7H6.88V16h8.58zm0-10.32v8.58H6.88V5.68h8.58zm8.59 10.31v1.71h-6.88V16h6.88zm0-3.43v1.7h-6.88v-1.7h6.88zm0-3.44v1.73h-6.88V9.12h6.88zm0-3.44V7.4h-6.88V5.68h6.88zM3.44 18.57V5.67H1.7v12.9q0 .33.26.6t.6.26.6-.26.27-.6zm22.31 0V3.97H5.15v14.6q0 .43-.15.86h19.91q.34 0 .6-.26t.25-.6zM27.5 2.24v16.33q0 1.08-.75 1.83t-1.83.74H2.57q-1.05 0-1.82-.74T0 18.57V3.97h3.44V2.24h24.05z" />
  </svg>
);
export default SvgActualites;
