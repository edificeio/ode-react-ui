import { IWebApp, IWidget } from "./utils/useOdeTsClient";
export declare type AppCode = string | null;
export interface UseAppIconsProps {
    /**
     * appCode from application. If doesn't exist, defaultIcon is served.
     */
    appCode?: AppCode;
    /**
     * defaultIcon must be a string from @ode-react-ui/icons
     */
    defaultIcon?: string;
}
export default function useOdeIcons(): {
    getIconClass: (app: IWebApp) => string;
    getIconCode: (app: IWebApp) => string;
    getWidgetIconClass: (widget: IWidget) => string;
    isIconUrl: (icon: string) => string | boolean;
};
