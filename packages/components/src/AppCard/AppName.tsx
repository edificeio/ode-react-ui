import { useAppCard } from "./AppCardContext";
import { Heading } from "../Heading";

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
