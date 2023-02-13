import { forwardRef, Ref } from "react";

import { useImage } from "@ode-react-ui/hooks";
import clsx from "clsx";

import { ImageProps } from "./ImageProps";

const Image = forwardRef(
  (
    {
      src,
      alt,
      imgPlaceholder,
      ratio,
      objectFit,
      className,
      ...restProps
    }: ImageProps,
    ref: Ref<HTMLImageElement>,
  ) => {
    const placeholder =
      imgPlaceholder ??
      "/assets/themes/ode-bootstrap/images/image-placeholder.png";

    const { imgSrc, onError } = useImage({ src, placeholder });

    const ratioImage = {
      "ratio ratio-1x1": ratio === "1",
      "ratio ratio-4x3": ratio === "4",
      "ratio ratio-16x9": ratio === "16",
      "ratio ratio-21x9": ratio === "21",
    };

    const objectImage = {
      "object-fit-contain": objectFit === "contain",
      "object-fit-cover": objectFit === "cover",
      "object-fit-fill": objectFit === "fill",
      "object-fit-scale": objectFit === "scale",
      "object-fit-none": objectFit === "none",
    };

    const ratioClasses = clsx({
      ...ratioImage,
    });

    const classes = clsx(
      {
        ...objectImage,
      },
      className,
    );

    const renderImage = (
      <img
        alt={alt}
        onError={onError}
        ref={ref}
        src={imgSrc}
        className={classes}
        {...restProps}
      />
    );

    if (ratio) {
      return <div className={ratioClasses}>{renderImage}</div>;
    }

    return renderImage;
  },
);

Image.displayName = "Image";

export default Image;
