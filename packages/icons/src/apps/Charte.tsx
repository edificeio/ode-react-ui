import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCharte = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    aria-hidden="true"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.64 22.6C0 21.97 0 21.97 0 12.86s0-9.08.7-9.63c.65-.5.99-.54 7.37-.54s6.72.02 7.38.54c1 .8.92 1.9-.29 3.53-.54.74-1.1 1.54-1.27 1.82-.26.4-.32.12-.32-1.65-.06-2.16-.06-2.16-5.52-2.16s-5.46 0-5.46 8.06 0 8.05 5.46 8.05 5.46 0 5.46-1.43c0-1.33.27-1.8.66-1.16.3.47.58.02.77-1.22.1-.68.4-1.77.66-2.4.48-1.19.48-1.19.48 2.89 0 2.23-.05 4.26-.15 4.48-.39 1.05-1.35 1.18-8.16 1.18-6.5.02-6.5.02-7.13-.61zM13.38 17c-.43-.25-2.23-1.25-4.03-2.2-6.07-3.3-5.58-2.91-4.75-3.9.4-.5.88-.89 1.09-.9.19-.03 1.37.54 2.6 1.23 4.29 2.42 3.7 2.46 5.07-.28 1.1-2.18 1.94-3.45 4.19-6.3.43-.55 1.7-1.8 2.85-2.77C22.5.1 22.5.1 23.44 1.04s.96.94-1.73 3.56c-3.71 3.66-6.47 8.07-7.05 11.32-.27 1.47-.4 1.56-1.28 1.07z" />
  </svg>
);
export default SvgCharte;
