import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgSuccessFill = ({
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
      d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm4.808-13.41a1 1 0 1 0-1.616-1.18l-3.61 4.951-1.806-2.222a1 1 0 0 0-1.552 1.26l2.625 3.232a1 1 0 0 0 1.584-.042l4.375-6Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgSuccessFill;
