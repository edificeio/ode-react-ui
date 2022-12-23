import { forwardRef, Ref } from "react";

import clsx from "clsx";

// variant: icon ou image
interface AvatarProps {
  isIconUrl?: boolean;
  variant: string;
  size?: string;
  appCode?: string;
  alt?: string;
  src?: string;
}

const Avatar = forwardRef(
  (
    {
      isIconUrl = false,
      variant = "square",
      size = "md",
      appCode = "placeholder",
      alt = "alternative text",
      src,
    }: AvatarProps,
    ref: Ref<HTMLImageElement>,
  ) => {
    const isTitle = variant === "title";
    const isSquare = variant === "square";
    const isCircle = variant === "circle";

    const classes = clsx("avatar react", {
      "avatar-xs": size === "xs" && !isTitle,
      "avatar-md": size === "md" && !isTitle,
      "avatar-lg": size === "lg" && !isTitle,
      "avatar-title gap-12 w-auto": isTitle,
      rounded: isSquare,
      "rounded-circle": isCircle,
      [`bg-light-${appCode} color-app-${appCode}`]:
        !isIconUrl && appCode && !isTitle,
      [`color-app-${appCode}`]: isTitle,
    });

    if (isIconUrl && src) {
      return <img src={src} alt={alt} className={classes} ref={ref} />;
    }

    if (!isIconUrl && appCode) {
      return (
        <div className={classes} ref={ref}>
          <svg
            role="img"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <use xlinkHref={`apps.svg#${appCode}`} />
          </svg>
        </div>
      );
    }

    return (
      <div
        className={`${classes} bg-light-placeholder color-app-placeholder`}
        ref={ref}
      >
        <svg
          role="img"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <use xlinkHref="apps.svg#placeholder" />
        </svg>
      </div>
    );
  },
);

Avatar.displayName = "Avatar";

export default Avatar;
