import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgProeps = ({
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
    <path d="M2.74 2.46c-.87 0-1.56.74-1.56 1.68v5.24c0 .94.7 1.68 1.56 1.68h9.3c-.19.22-.88.92-1.7 1.71-.96.96-1.78 1.73-1.78 1.76a40.09 40.09 0 0 0 4.55-2.65c.28-.22.57-.39.64-.39.15 0 .56.32.56.44 0 .17-.53.53-1.61 1.03-.63.3-1.1.56-1.06.58.1.07 1-.07 1.75-.27 1.2-.3 1.83-.64 2.1-1.15.12-.29.07-.5-.24-.87l-.15-.19h6.76c.86 0 1.56-.74 1.56-1.68V4.14c0-.94-.7-1.69-1.56-1.69H2.74zm8.56 1.41c.27.03.53.08.75.15.43.19.89.62 1.08 1 .24.49.24.51-.12.51-.17 0-.41.05-.53.1-.27.12-.7.55-.87.94l-.14.29-.02-.44c-.03-.36-.05-.5-.17-.6-.17-.19-.5-.19-.7-.02-.14.12-.14.17-.14 1.95v1.8H9.9c-.3 0-.72.02-.96.05l-.46.05V3.92h.96c.82 0 .99 0 .99.1 0 .12.02.12.24-.03.12-.07.36-.12.62-.12zm-8.58.03 1.9.02c1.8.03 1.9.03 2.16.17.41.22.75.58.96.99.15.3.17.45.17.91 0 .65-.14 1.01-.58 1.47-.45.48-.72.57-1.77.6l-.9.02v1.47h-.55c-.31 0-.74.02-.98.05l-.41.04V3.9zm14.2.02c.47 0 .92.12 1.36.34a3.29 3.29 0 0 1 1.49 1.68c.02.1.12.12.48.12.46 0 .46 0 .82.32l.36.33-.36.32-.36.33-.41-.02-.44-.03-.1.37c-.06.19-.18.48-.3.64-.22.34-.75.85-1.04 1.01-.22.12-.24.12-.36 0a3.4 3.4 0 0 1-.31-.52c-.17-.46-.48-.8-.68-.8-.04 0-.16.07-.26.17-.22.24-.22.7 0 1.18l.17.33h-.34a2.7 2.7 0 0 1-1.85-.84 2.94 2.94 0 0 1-.8-1.49l-.04-.29.16.12c.34.3.77.39.92.22.26-.31.07-.87-.44-1.28-.19-.14-.38-.26-.43-.28-.12-.05.27-.7.65-1.06a3.2 3.2 0 0 1 2.12-.87zM4.67 5.53v.99h.53c.46 0 .56-.02.68-.14.16-.17.16-.49.02-.7-.07-.12-.14-.15-.65-.15h-.58zm12.27.3c-.46 0-.67.11-.94.5-.34.48-.07 1.22.53 1.46.46.2 1.18-.1 1.4-.55.11-.29.07-.74-.1-.98-.27-.32-.48-.44-.9-.44zm-4.02.64H13c.04 0 .11.03.19.05.14.07.16.14.19.43v.34h-1.4l.15-.22c.21-.36.53-.6.8-.6zM2.86 14.3c-.89 0-1.6.72-1.6 1.6v5.13c0 .89.71 1.64 1.6 1.64h19.22c.89 0 1.63-.75 1.63-1.64V15.9c0-.9-.74-1.61-1.63-1.61H2.86zm16.55 1.13c.86 0 1.73.16 2.6.48l-.87 1.15a3.06 3.06 0 0 0-1.4-.38c-.24 0-.43.04-.62.12-.2.1-.3.21-.3.38 0 .15.13.3.4.39.11.05.47.14 1.08.26.77.17 1.3.39 1.6.68.3.24.44.55.44.93 0 .97-.63 1.61-1.83 1.9a6.3 6.3 0 0 1-4.23-.5l.91-1.2c.65.4 1.28.6 1.88.6a2 2 0 0 0 .7-.12c.24-.12.33-.27.33-.44s-.12-.3-.36-.43c-.2-.07-.5-.17-.94-.26a7.6 7.6 0 0 1-.98-.22c-.22-.07-.41-.14-.56-.24-.45-.24-.67-.62-.67-1.15s.24-.97.7-1.33c.53-.4 1.22-.62 2.11-.62zm-16.19.14h4.7v1.25H5.35v.99h2.4v1.25h-2.4v1.03H7.9v1.25H3.22v-5.77zm6.04 0h3.39c.98 0 1.7.2 2.21.6.43.34.65.77.65 1.3s-.17.96-.53 1.3c-.46.43-1.2.67-2.26.67H11.4v1.9H9.26v-5.77zm2.14 1.2v1.45h.7c.48 0 .79-.08.96-.22a.64.64 0 0 0-.05-1.03c-.17-.12-.46-.2-.9-.2h-.71z" />
  </svg>
);
export default SvgProeps;
