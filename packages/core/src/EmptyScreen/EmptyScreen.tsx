/**
 * Alert  Component
 *
 * @see Docs     https://ode-react-ui.vercel.app/?path=/docs/components-core-emptyscreen--base
 * @see Source   https://github.com/opendigitaleducation/ode-react-ui/blob/main/packages/core/src/EmptyScreen/EmptyScreen.tsx
 * @see WAI-ARIA https://www.w3.org/WAI/ARIA/apg/patterns/alert/
 */

import { Heading } from "../Heading";
import { EmptyScreenProps } from "./EmptyScreenProps";
const EmptyScreen = ({ image, title, text }: EmptyScreenProps) => {
  return (
    <div className="text-center max-w-512 mx-auto">
      <div className="emptyscreen-image"></div>
      {image}
      {title && (
        <Heading level="h2" className="h2 text-secondary mb-8">
          {title}
        </Heading>
      )}
      {text && <div className="text">{text}</div>}
    </div>
  );
};
EmptyScreen.displayName = "EmptyScreen";

export default EmptyScreen;
