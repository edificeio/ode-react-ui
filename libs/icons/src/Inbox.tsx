import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgInbox = ({
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
      d="M16.76 4H7.24c-.558 0-1.106.148-1.58.425a2.9 2.9 0 0 0-1.105 1.146v.002l-2.913 5.493a1 1 0 0 0-.608 1.192A.895.895 0 0 0 1 12.5v5.667c0 .751.316 1.472.879 2.003.562.531 1.325.83 2.121.83h16c.796 0 1.559-.299 2.121-.83A2.756 2.756 0 0 0 23 18.167V12.5a.894.894 0 0 0-.034-.242 1 1 0 0 0-.608-1.192l-2.913-5.494a2.9 2.9 0 0 0-1.105-1.147A3.134 3.134 0 0 0 16.76 4Zm3.326 7-2.43-4.584-.002-.003a.966.966 0 0 0-.368-.382 1.044 1.044 0 0 0-.526-.142H7.24c-.186 0-.368.05-.526.142a.966.966 0 0 0-.368.382l-.896-.42.894.423L3.914 11H8a1 1 0 0 1 .832.445L10.535 14h2.93l1.703-2.555A1 1 0 0 1 16 11h4.086ZM3 13v5.167c0 .25.105.49.293.667.187.178.442.277.707.277h16c.265 0 .52-.1.707-.277a.919.919 0 0 0 .293-.667V13h-4.465l-1.703 2.555A1 1 0 0 1 14 16h-4a1 1 0 0 1-.832-.445L7.465 13H3Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgInbox;
