/**
 * AppCard Component
 *
 * @see Docs     https://ode-react-ui.vercel.app/?path=/docs/components-core-appcard--base
 * @see Source   https://github.com/opendigitaleducation/ode-react-ui/blob/main/packages/core/src/AppCard/AppCard.tsx
 */
import { PolymorphicAppCard } from "./AppCardProps";
declare const AppCard: PolymorphicAppCard & {
    Icon: {
        ({ title, size, color, ...props }: import("../AppIcon/AppIconProps").AppIconProps): JSX.Element;
        displayName: string;
    };
};
export default AppCard;
