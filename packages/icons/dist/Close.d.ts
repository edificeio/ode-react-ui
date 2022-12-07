import { SVGProps } from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
declare const SvgClose: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => JSX.Element;
export default SvgClose;
