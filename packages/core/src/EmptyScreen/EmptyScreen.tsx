/**
 * Alert  Component
 *
 * @see Docs     https://ode-react-ui.vercel.app/?path=/docs/components-core-emptyscreen--base
 * @see Source   https://github.com/opendigitaleducation/ode-react-ui/blob/main/packages/core/src/EmptyScreen/EmptyScreen.tsx
 * @see WAI-ARIA https://www.w3.org/WAI/ARIA/apg/patterns/alert/
 */

import { Heading } from "../Heading";
import { EmptyScreenProps } from "./EmptyScreenProps";

export const EmptyScreen = ({
  imageSrc,
  imageAlt = "",
  title,
  text,
}: EmptyScreenProps) => {
  return (
    <div className="emptyscreen">
      {imageSrc && (
        <div className="emptyscreen-image mb-12">
          <img className="mx-auto" src={imageSrc} alt={imageAlt} />
        </div>
      )}

      {title && (
        <Heading level="h2" headingStyle="h2" className="text-secondary mb-8">
          {title}
        </Heading>
      )}
      {text && <div className="text">{text}</div>}
    </div>
  );
};
EmptyScreen.displayName = "EmptyScreen";

export default EmptyScreen;
