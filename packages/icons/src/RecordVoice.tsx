import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgRecordVoice = ({
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
      d="M7.5 5a4.5 4.5 0 0 1 9 0v7a4.5 4.5 0 1 1-9 0V5ZM12 2.5A2.5 2.5 0 0 0 9.5 5v7a2.5 2.5 0 0 0 5 0V5A2.5 2.5 0 0 0 12 2.5Zm-1 17.448c-2.412-.255-4.13-1.43-5.255-2.904C4.502 15.415 4 13.447 4 12a1 1 0 1 1 2 0c0 1.053.384 2.585 1.335 3.831C8.255 17.036 9.718 18 12 18s3.745-.964 4.665-2.169C17.615 14.585 18 13.053 18 12a1 1 0 1 1 2 0c0 1.447-.502 3.415-1.745 5.044-1.124 1.474-2.843 2.649-5.255 2.904V22h3a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2h3v-2.052Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgRecordVoice;
