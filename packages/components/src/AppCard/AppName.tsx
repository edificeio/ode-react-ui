import { Heading } from "../index";
import { useAppCard } from "./AppCardContext";

const AppName = () => {
  const { isHeading, level, headingStyle, displayName } = useAppCard();

  return isHeading ? (
    <Heading {...{ level, headingStyle }}>{displayName}</Heading>
  ) : (
    <p>{displayName}</p>
  );
};

AppName.displayName = "AppCard.Name";

export default AppName;
