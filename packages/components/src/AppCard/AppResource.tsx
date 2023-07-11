import { useAppCard } from "./AppCardContext";
import { Heading } from "../Heading";

const AppResource = ({
  resourceName,
}: {
  resourceName: string | undefined;
}) => {
  const { isHeading, level, headingStyle } = useAppCard();

  if (resourceName) {
    return isHeading ? (
      <Heading {...{ level, headingStyle }}>- {resourceName}</Heading>
    ) : (
      <p>- {resourceName}</p>
    );
  }
};

AppResource.displayName = "AppCard.Resource";

export default AppResource;
