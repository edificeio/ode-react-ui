import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTextUnderline = ({
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
    <rect width={14} height={2} x={5} y={20.5} fill="currentColor" rx={1} />
    <path
      fill="currentColor"
      d="M12.056 18c-1.384 0-2.613-.262-3.684-.786-1.057-.525-1.883-1.251-2.479-2.18C5.298 14.09 5 13.02 5 11.821V3.966c0-.284.09-.517.268-.696.179-.18.41-.27.692-.27.283 0 .514.09.692.27.179.18.268.412.268.696v7.855c0 .854.216 1.61.648 2.27.431.659 1.034 1.175 1.808 1.55.79.374 1.683.562 2.68.562.982 0 1.846-.188 2.59-.562.76-.375 1.354-.892 1.786-1.55.432-.66.648-1.416.648-2.27V3.966c0-.284.09-.517.268-.696A.982.982 0 0 1 18.04 3c.298 0 .528.09.692.27.179.18.268.412.268.696v7.855c0 1.198-.298 2.27-.893 3.213-.596.929-1.414 1.655-2.456 2.18-1.042.524-2.24.786-3.595.786Z"
    />
  </svg>
);
export default SvgTextUnderline;
