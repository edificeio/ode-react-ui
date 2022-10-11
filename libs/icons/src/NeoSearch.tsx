import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgNeoSearch = ({
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
      d="M1.27 11.552a7.745 7.745 0 0 1 0-4.156c.38-1.377 1.095-2.579 2.149-3.604a7.928 7.928 0 0 1 2.716-1.777c1.02-.4 2.074-.6 3.161-.6 1.07 0 2.115.2 3.136.6 1.02.4 1.926.993 2.716 1.777a7.904 7.904 0 0 1 1.902 2.86 7.812 7.812 0 0 1 .518 3.29 7.647 7.647 0 0 1-.889 3.171c.461.129.865.36 1.21.697l4.297 4.156c.576.56.864 1.241.864 2.042 0 .801-.288 1.482-.864 2.042-.576.56-1.276.841-2.099.841-.823 0-1.523-.28-2.099-.84l-4.272-4.18a2.423 2.423 0 0 1-.74-1.178 8.302 8.302 0 0 1-3.68.84c-1.087 0-2.14-.2-3.16-.6a8.102 8.102 0 0 1-2.717-1.753 7.854 7.854 0 0 1-2.149-3.628Zm2.495-2.066c0 1.49.535 2.755 1.605 3.796 1.086 1.04 2.395 1.561 3.926 1.561 1.515 0 2.807-.52 3.877-1.561 1.07-1.041 1.613-2.307 1.63-3.796.016-1.49-.527-2.755-1.63-3.796-1.087-1.057-2.379-1.585-3.877-1.585-1.515 0-2.823.528-3.926 1.585C4.3 6.731 3.765 7.996 3.765 9.486Z"
      fill="#2A9CC8"
    />
  </svg>
);

export default SvgNeoSearch;
