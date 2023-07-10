import { useTranslation } from "react-i18next";

import { useAppCard } from "./AppCardContext";
import { Heading } from "../Heading";

const AppName = () => {
  const { isHeading, level, headingStyle, displayName } = useAppCard();
  const { t } = useTranslation();

  return isHeading ? (
    <Heading {...{ level, headingStyle }}>{t(displayName)}</Heading>
  ) : (
    <p>{t(displayName)}</p>
  );
};

AppName.displayName = "AppCard.Name";

export default AppName;
