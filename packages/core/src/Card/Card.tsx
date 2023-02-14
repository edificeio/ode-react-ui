import React, { forwardRef, Ref } from "react";

import { useOdeIcons } from "@ode-react-ui/hooks";
import { Files, Globe, Options, Users } from "@ode-react-ui/icons";
import { OneProfile } from "@ode-react-ui/icons/nav";
import clsx from "clsx";

import { AppIcon } from "../AppIcon";
import { Avatar } from "../Avatar";
import { IconButton } from "../Button";
import { Image } from "../Image";
import { Tooltip } from "../Tooltip";
import { CardProps } from "./CardProps";

const Card = forwardRef(
  (
    {
      app,
      className,
      creatorName = "tom.mate",
      isAnimated = false,
      isFolder = false,
      isLoading = false,
      isSelected = false,
      isShared = false,
      isPublic = false,
      name = "Resource",
      people = "23",
      resourceSrc = "",
      updatedAt = "2 days ago",
      userSrc = "",
      onOpen,
      onSelect,
      messagePublic,
      messageShared,
      ...restProps
    }: CardProps,
    ref: Ref<HTMLDivElement>,
  ) => {
    const { getIconCode } = useOdeIcons();

    const classes = clsx(
      "card",
      {
        "placeholder-glow": isLoading,
        "is-selected": isSelected,
        "is-animated": isAnimated,
      },
      className,
    );

    const classesTitle = clsx(
      "card-title body text-truncate text-truncate--2 pe-16",
      {
        placeholder: isLoading,
      },
    );

    const classesText = clsx("card-text small", {
      placeholder: isLoading,
    });

    const classesName = clsx("small text-truncate", {
      placeholder: isLoading,
    });

    const classesProfile = clsx(
      "d-inline-flex align-items-center gap-8 text-truncate",
      {
        placeholder: isLoading,
      },
    );

    const appCode = getIconCode(app);

    const classesFiles = clsx(`color-app-${appCode}`, {
      placeholder: isLoading,
    });

    function handleOnSelect(event: React.MouseEvent) {
      event.stopPropagation();
      onSelect?.();
    }

    const renderResource = resourceSrc ? (
      <div className="card-image">
        <Image
          alt={creatorName}
          src={resourceSrc}
          objectFit="cover"
          className="h-full"
        />
      </div>
    ) : (
      <AppIcon app={app} iconFit="ratio" size="80" variant="rounded" />
    );

    const renderThumbnails = isFolder ? (
      <Files width="48" height="48" className={classesFiles} />
    ) : (
      renderResource
    );

    const renderUserPhoto = userSrc ? (
      <Avatar alt={creatorName} size="xs" src={userSrc} variant="circle" />
    ) : (
      <OneProfile />
    );

    return (
      <div ref={ref} className={classes} {...restProps}>
        {!isLoading && (
          <IconButton
            aria-label="Open Action Bar"
            className="z-3"
            color="secondary"
            icon={<Options />}
            onClick={handleOnSelect}
            variant="ghost"
          />
        )}
        <button
          onClick={onOpen}
          className="position-absolute bottom-0 end-0 top-0 start-0 opacity-0 z-1"
          aria-label="Open resource"
        ></button>
        <div className="card-body">
          {renderThumbnails}
          <div>
            <h3 className={classesTitle}>
              <strong>{name}</strong>
            </h3>
            {!isFolder ? (
              <p className="card-text small">
                <em className={classesText}>{updatedAt}</em>
              </p>
            ) : null}
          </div>
        </div>
        {!isFolder ? (
          <div className="card-footer gap-16">
            <div className={classesProfile}>
              {renderUserPhoto}
              <p className={classesName}>{creatorName}</p>
            </div>
            <div className="d-inline-flex align-items-center gap-8">
              {isPublic && (
                <Tooltip message={messagePublic} placement="left">
                  <Globe width={16} height={16} />
                </Tooltip>
              )}

              {isShared && (
                <Tooltip message={messageShared} placement="left">
                  <Users width={16} height={16} />
                </Tooltip>
              )}
            </div>
          </div>
        ) : null}
      </div>
    );
  },
);

Card.displayName = "Card";

export default Card;
