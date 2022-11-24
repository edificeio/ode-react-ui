import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRbs = ({
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
    <path d="M7.45 1.8c-.4.17-.48.44-.48 2.34 0 1.66.03 1.9.22 2.07.12.12.36.22.53.22.7-.03.82-.39.82-2.41 0-1.64 0-1.7-.3-2s-.43-.33-.79-.21zm8.42.15c-.29.22-.29.31-.34 1.88-.04 1.78 0 2.11.3 2.4.26.27.81.24 1.05-.02.17-.2.2-.53.2-2.1 0-2-.05-2.18-.6-2.33a.64.64 0 0 0-.6.17zM3.25 4.4a2.67 2.67 0 0 0-.9.84c-.3.5-.35.73-.4 1.78l-.05 1.2h20.25l-.05-1.17c-.05-1.42-.31-2.02-1.08-2.53-.46-.31-.6-.33-1.97-.36l-1.5-.05v.97c0 .86-.02 1-.3 1.32-.4.48-1 .6-1.47.31s-.63-.65-.63-1.68v-.9H8.9v.9c0 1.03-.12 1.4-.63 1.68-.48.29-1.05.17-1.46-.31-.27-.32-.32-.46-.32-1.32v-.94H5.15c-1.2 0-1.45.02-1.9.26zM1.92 14.98c0 6.9.03 6.98.84 7.72.27.24.63.48.82.53.43.12 16.47.12 16.9 0 .18-.05.54-.29.8-.53.84-.74.84-.81.84-7.72V8.95H1.92v6.03zm5.03-3.43-.02 2.02H2.6l-.05-2.02-.02-2h4.45l-.03 2zm4.83-.1v1.9l-.62-.31c-.87-.41-2.31-.44-3.06-.03a5.8 5.8 0 0 1-.57.27c-.05 0-.08-.84-.08-1.88V9.55h4.33v1.9zm4.9.1-.02 2.02-2.14.04-2.14.03V9.55h4.33l-.02 2zm4.82 0-.03 2.02h-4.2l-.05-2.02-.03-2h4.33l-.02 2zM6.25 14.77a3.6 3.6 0 0 0-.17 3.1c.08.2-.04.22-1.73.22H2.52v-3.97h4.1l-.37.65zm5.53 1.32v2H7.46v-3.97h4.32v1.97zm4.93 0v2h-1.87c-1.73 0-1.88-.03-1.78-.22.04-.12.16-.53.24-.92.19-.88.07-1.73-.36-2.38l-.32-.45h4.1v1.97zm4.81 0v2H17.2v-3.97h4.33v1.97zM6.76 18.76c.2.17.21.4.21 2.12v1.92l-1.6-.05c-1.4-.02-1.67-.07-1.95-.29-.75-.55-.82-.77-.87-2.4l-.05-1.5h2.02c1.71 0 2.05.03 2.24.2zm5.02-.05c0 .34-.81.84-1.58.99-.68.14-.73.36-.08.29.44-.05.99-.24 1.6-.56.04-.02.06.73.06 1.66v1.69H7.46v-1.64c0-1.51.02-1.63.21-1.56.9.36 1.23.46 1.42.38.17-.07.02-.19-.67-.53-.53-.26-.92-.52-.94-.67-.02-.2.14-.2 2.14-.2 1.73 0 2.16.03 2.16.15zm4.93 1.95v2.12h-4.33v-1.93c0-1.06.05-2 .08-2.09.07-.17.38-.2 2.16-.2h2.1v2.1zm4.81-.6c-.05 1.63-.14 1.85-.89 2.4-.29.24-.5.27-1.85.27h-1.51l-.05-2.1-.03-2.06h4.36l-.03 1.49z" />
  </svg>
);
export default SvgRbs;
