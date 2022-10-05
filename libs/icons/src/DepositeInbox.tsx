import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgDepositeInbox = ({
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
      d="M1 12a1 1 0 0 1 1-1h6a1 1 0 0 1 .832.445L10.535 14h2.93l1.703-2.555A1 1 0 0 1 16 11h6a1 1 0 1 1 0 2h-5.465l-1.703 2.555A1 1 0 0 1 14 16h-4a1 1 0 0 1-.832-.445L7.465 13H2a1 1 0 0 1-1-1Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 1a1 1 0 0 1 1 1v6.201l1.312-1.243a1 1 0 1 1 1.376 1.452l-3 2.842a1 1 0 0 1-1.376 0l-3-2.842a1 1 0 1 1 1.376-1.452L11 8.201V2a1 1 0 0 1 1-1ZM7.24 3.842H8a1 1 0 1 1 0 2h-.76c-.196 0-.386.053-.546.147a.937.937 0 0 0-.358.37l-.002.002L3 12.669v5.436c0 .22.091.442.274.614.183.174.444.281.726.281h16c.282 0 .543-.107.727-.28a.846.846 0 0 0 .273-.615V12.67l-3.334-6.308-.002-.003a.936.936 0 0 0-.358-.37 1.083 1.083 0 0 0-.546-.146H16a1 1 0 1 1 0-2h.76c.547 0 1.087.145 1.56.422a2.936 2.936 0 0 1 1.116 1.165l3.448 6.525a1 1 0 0 1 .116.467v5.684c0 .786-.33 1.528-.898 2.066A3.058 3.058 0 0 1 20 21H4a3.058 3.058 0 0 1-2.102-.829A2.845 2.845 0 0 1 1 18.105v-5.684a1 1 0 0 1 .116-.467l3.448-6.525.001-.001a2.936 2.936 0 0 1 1.116-1.164 3.085 3.085 0 0 1 1.559-.422Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgDepositeInbox;
