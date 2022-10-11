import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgCheckboxValidated = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width="24"
    height="24"
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
      d="M3.5 5.5a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2v-13Zm13.814 3.581a1 1 0 0 0-1.628-1.162l-4.23 5.921-2.174-2.732a1 1 0 0 0-1.564 1.246l3 3.769a1 1 0 0 0 1.596-.042l5-7Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgCheckboxValidated;
