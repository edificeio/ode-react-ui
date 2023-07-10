import { useTranslation } from "react-i18next";

import { useAppCard } from "./AppCardContext";
import { Heading } from "../Heading";

const AppResource = () => {
  const { isHeading, level, headingStyle, resourceName } = useAppCard();
  const { t } = useTranslation();

  return isHeading ? (
    <Heading {...{ level, headingStyle }}>- {t(resourceName)}</Heading>
  ) : (
    <p>- {t(resourceName)}</p>
  );
};

AppResource.resourceName = "AppCard.Resource";

export default AppResource;
