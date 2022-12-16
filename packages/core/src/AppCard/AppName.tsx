import { Heading } from "../index";
import useAppCard from "./AppCardContext";

const AppName = () => {
  const { isHeading, level, headingStyle, displayName, variant } = useAppCard();

  if (variant === "square") {
    <p>{displayName}</p>;
  }

  return isHeading ? (
    <Heading {...{ level, headingStyle }}>{displayName}</Heading>
  ) : (
    <p>{displayName}</p>
  );
};

AppName.displayName = "AppCard.Name";

export default AppName;
