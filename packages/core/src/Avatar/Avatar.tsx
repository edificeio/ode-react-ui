import { forwardRef, Ref } from "react";

import clsx from "clsx";

import { Image } from "../Image";
import { AvatarProps } from "./AvatarProps";

const Avatar = forwardRef(
  (
    {
      variant = "square",
      size = "md",
      alt,
      src,
      imgPlaceholder,
      className,
      ...restProps
    }: AvatarProps,
    ref: Ref<HTMLDivElement>,
  ) => {
    const placeholder =
      imgPlaceholder || "/assets/themes/ode-bootstrap/images/no-avatar.svg";

    const isSquare = variant === "square";
    const isRounded = variant === "rounded";
    const isCircle = variant === "circle";

    const avatarSizes = {
      "avatar-xs": size === "xs",
      "avatar-sm": size === "sm",
      "avatar-md": size === "md",
      "avatar-lg": size === "lg",
      "avatar-xl": size === "xl",
    };

    const avatarVariants = {
      square: isSquare,
      rounded: isRounded,
      "rounded-circle": isCircle,
    };

    const classes = clsx(
      "avatar",
      {
        ...avatarSizes,
        ...avatarVariants,
      },
      className,
    );

    return (
      <div ref={ref} className={classes}>
        <Image
          src={src}
          alt={alt}
          imgPlaceholder={placeholder}
          {...restProps}
        />
      </div>
    );
  },
);

Avatar.displayName = "Avatar";

export default Avatar;
