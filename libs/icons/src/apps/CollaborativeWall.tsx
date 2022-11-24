import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCollaborativeWall = ({
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
    <path d="M11.71 10.46q0 1.1-.84 1.9t-2.04.82-2.05-.82-.86-1.9q0-1.13.86-1.92t2.05-.8 2.04.8.84 1.92zm6.73 0q0 1.1-.84 1.9t-2.04.82q-1.2 0-2.04-.82t-.87-1.9q0-1.13.87-1.92t2.04-.8q1.2 0 2.04.8t.84 1.92zm3.03 2.4V3.93q0-1.15-.43-1.66t-1.49-.48H4.65q-1.14 0-1.52.46t-.41 1.68v9.04q.57.32 1.2.53t1.08.39 1.08.24.97.14.93.05.77.03.77-.05.6-.03q.92 0 1.28.36.07.1.12.13.36.33.81.7.1-1.23 1.6-1.19l.5.03q.44.03.57.02t.6.03.73-.03.72-.05.82-.12.84-.16.89-.27.91-.36.96-.48zm2.2-.04q-1.64 2-5 3.37 1.12 3.82-.32 6.25-.87 1.51-2.45 1.97-1.4.43-2.43-.2-1.16-.67-1.1-2.2l-.03-4.38-.32-.07q-.22-.04-.3-.08l-.03 4.53q.05 1.53-1.1 2.2-1.07.63-2.46.2-1.59-.48-2.45-2-1.4-2.42-.3-6.22-3.36-1.37-5-3.37-.33-.5-.04-.86t.8.02l.16.1q.12.07.14.1V2.86q0-.97.63-1.66T3.6.53h16.85q.9 0 1.54.68t.63 1.66v9.3l.29-.2q.5-.35.8-.02t-.06.87z" />
  </svg>
);
export default SvgCollaborativeWall;
