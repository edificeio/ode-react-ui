import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgVideo = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 26 24"
    width="24"
    height="24"
    aria-hidden="true"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M5.15 22v-1.72q0-.34-.25-.6t-.6-.25H2.57q-.33 0-.6.24t-.26.6v1.74q0 .33.26.6t.6.26H4.3q.34 0 .6-.26t.24-.6zm0-5.14v-1.73q0-.34-.25-.6t-.6-.27H2.57q-.33 0-.6.27t-.26.6v1.73q0 .34.26.6t.6.24H4.3q.34 0 .6-.24t.24-.6zm0-5.17v-1.7q0-.37-.25-.6t-.6-.27H2.57q-.33 0-.6.26t-.26.6v1.71q0 .36.26.6t.6.27H4.3q.34 0 .6-.27t.24-.6zM18.9 22.01v-6.88q0-.34-.26-.6t-.6-.27H7.71q-.34 0-.6.27t-.24.6V22q0 .33.24.6t.6.26h10.32q.36 0 .6-.26t.26-.6zM5.15 6.54v-1.7q0-.36-.24-.63t-.6-.24H2.56q-.33 0-.6.24t-.26.63v1.7q0 .34.26.6t.6.27H4.3q.34 0 .6-.27t.24-.6zm18.9 15.47v-1.74q0-.33-.27-.6t-.6-.24h-1.7q-.37 0-.6.24t-.27.6v1.74q0 .33.26.6t.6.26h1.71q.36 0 .6-.26t.27-.6zM18.9 11.69V4.84q0-.36-.26-.63t-.6-.24H7.71q-.34 0-.6.24t-.24.63v6.85q0 .36.24.6t.6.27h10.32q.36 0 .6-.27t.26-.6zm5.15 5.17v-1.73q0-.34-.27-.6t-.6-.27h-1.7q-.37 0-.6.27t-.27.6v1.73q0 .34.26.6t.6.24h1.71q.36 0 .6-.24t.27-.6zm0-5.17v-1.7q0-.37-.27-.6t-.6-.27h-1.7q-.37 0-.6.26t-.27.6v1.71q0 .36.26.6t.6.27h1.71q.36 0 .6-.27t.27-.6zm0-5.15v-1.7q0-.36-.27-.63t-.6-.24h-1.7q-.37 0-.6.24t-.27.63v1.7q0 .34.26.6t.6.27h1.71q.36 0 .6-.27t.27-.6zm1.7-2.14v18.04q0 .89-.62 1.51t-1.52.63H2.14q-.87 0-1.52-.63T0 22.44V4.4q0-.89.62-1.51t1.52-.65H23.6q.9 0 1.52.65t.62 1.51z" />
  </svg>
);
export default SvgVideo;
