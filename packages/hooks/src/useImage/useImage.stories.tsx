import useImage from "./useImage";
// @ts-ignore
import docs from "./useImage.docs.mdx";

export default {
  title: "Hooks/useImage",
  parameters: {
    docs: { page: docs },
  },
};

export const Example = () => {
  const src = "";
  const alt = "alternative text";
  const placeholder =
    "/assets/themes/ode-bootstrap/images/image-placeholder.png";
  const { imgSrc, onError } = useImage({ src, placeholder });

  return <img alt={alt} onError={onError} src={imgSrc} />;
};
