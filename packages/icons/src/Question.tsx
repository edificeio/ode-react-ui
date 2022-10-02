import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgQuestion = ({
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
      d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.031 8.427c-.184.242-.281.61-.281 1.017a1 1 0 1 1-2 0c0-.662.148-1.516.69-2.228C10.017 6.456 10.935 6 12.165 6c1.416 0 2.32.74 2.757 1.658.391.822.408 1.785.18 2.428-.28.784-.819 1.407-1.2 1.848l-.159.185c-.431.513-.578.79-.578 1.094v1.12a1 1 0 0 1-2 0v-1.12c0-1.087.605-1.854 1.048-2.381l.199-.235c.393-.461.66-.776.805-1.183.044-.124.07-.536-.101-.897a.849.849 0 0 0-.3-.358c-.12-.08-.319-.159-.651-.159-.695 0-.985.231-1.133.427Z"
      fill="currentColor"
    />
    <path d="M13.325 17.167a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fill="currentColor" />
  </svg>
);

export default SvgQuestion;
