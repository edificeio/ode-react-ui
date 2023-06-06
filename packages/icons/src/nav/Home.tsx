import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHome = ({
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
    <path
      fill="currentColor"
      d="M20.584 13.536v7.458c0 .28-.098.512-.294.699a1.062 1.062 0 0 1-.667.307H13.91v-5.978h-3.817V22H4.383a.848.848 0 0 1-.668-.307 1.162 1.162 0 0 1-.293-.699v-7.569l8.567-7.375 8.568 7.375c.018.018.027.055.027.111Zm3.31-1.09-.908 1.146a.543.543 0 0 1-.32.168h-.054a.59.59 0 0 1-.32-.084L11.989 4.682 1.687 13.676a.505.505 0 0 1-.347.084.544.544 0 0 1-.32-.168l-.935-1.145a.524.524 0 0 1-.08-.363.589.589 0 0 1 .16-.335l10.703-9.33c.32-.28.694-.419 1.121-.419.427 0 .81.14 1.148.419l3.63 3.156V2.56c0-.15.044-.27.133-.363a.458.458 0 0 1 .347-.14h2.856c.143 0 .258.046.347.14a.504.504 0 0 1 .134.363v6.34l3.256 2.85c.107.074.16.186.16.335 0 .149-.036.27-.107.363Z"
    />
  </svg>
);
export default SvgHome;
