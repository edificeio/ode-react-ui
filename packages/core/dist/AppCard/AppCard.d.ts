/**
 * AppCard Component
 *
 * @see Docs     https://ode-react-ui.vercel.app/?path=/docs/components-core-app-card--base
 * @see Source   https://github.com/opendigitaleducation/ode-react-ui/blob/main/packages/core/src/AppCard/AppCard.tsx
 */
import AppIcon from "../AppIcon/AppIcon";
import { PolymorphicAppCard } from "./AppCardProps";
declare const AppCard: PolymorphicAppCard & {
    Icon: typeof AppIcon;
};
export default AppCard;
