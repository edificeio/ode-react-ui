import clsx from "clsx";

// variant: icon ou image
interface AvatarProps {
  isIconUrl?: boolean;
  variant: string;
  size?: string;
  appCode?: string;
  appName?: string;
  alt?: string;
  src?: string;
}

const Avatar = ({
  isIconUrl = false,
  variant = "square",
  size = "md",
  appCode = "placeholder",
  appName = "placeholder",
  alt,
  src,
}: AvatarProps) => {
  const classes = clsx("avatar react", {
    "avatar-xs": size === "xs" && variant !== "title",
    "avatar-md": size === "md" && variant !== "title",
    "avatar-lg": size === "lg" && variant !== "title",
    "avatar-title": variant === "title",
    "rounded": variant === "square",
    "rounded-circle": variant === "circle",
    [`bg-light-${appCode} color-app-${appCode}`]:
      !isIconUrl && appCode && variant !== "title",
    [`color-app-${appCode}`]: variant === "title",
  });

  if (isIconUrl && src) {
    return <img src={src} alt={alt} className={classes} />;
  }

  if (!isIconUrl && appCode) {
    return (
      <div className={classes}>
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
    <div className={`${classes} bg-light-placeholder color-app-placeholder`}>
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
};

Avatar.displayName = "Avatar";

export default Avatar;
