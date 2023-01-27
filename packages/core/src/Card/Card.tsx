import React, { forwardRef, Ref } from "react";

import { Files, Globe, Options, Users } from "@ode-react-ui/icons";
import { OneProfile } from "@ode-react-ui/icons/nav";
import clsx from "clsx";

import { Avatar } from "../Avatar";
import { IconButton } from "../Button";
import { CardProps } from "./CardProps";

const Card = forwardRef(
  (
    {
      appCode = "placeholder",
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
      ...restProps
    }: CardProps,
    ref: Ref<HTMLDivElement>,
  ) => {
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

    const classesAvatar = clsx({
      placeholder: isLoading,
    });

    const classesFiles = clsx(`color-app-${appCode as string}`, {
      placeholder: isLoading,
    });

    function handleKeyDown(e: React.KeyboardEvent) {
      if (e.key === "Enter") {
        e.preventDefault();
        onOpen?.();
      }
    }

    function handleOnSelect(event: React.MouseEvent) {
      event.stopPropagation();
      onSelect?.();
    }

    return (
      <div
        ref={ref}
        className={classes}
        role="button"
        tabIndex={0}
        onClick={onOpen}
        onKeyDown={handleKeyDown}
        {...restProps}
      >
        {!isLoading && (
          <IconButton
            aria-label="Open Action Bar"
            icon={<Options />}
            variant="ghost"
            color="secondary"
            onClick={handleOnSelect}
          />
        )}
        <div className="card-body">
          {isFolder ? (
            <Files width="48" height="48" className={classesFiles} />
          ) : (
            <Avatar
              isIconUrl={!!resourceSrc}
              variant="square"
              appCode={appCode}
              src={resourceSrc}
              className={classesAvatar}
            />
          )}
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
              {userSrc ? (
                <Avatar
                  className={classesAvatar}
                  isIconUrl={!!userSrc}
                  size="xs"
                  src={userSrc}
                  variant="circle"
                />
              ) : (
                <OneProfile />
              )}
              <p className={classesName}>{creatorName}</p>
            </div>
            <div className="d-inline-flex align-items-center gap-8">
              {isPublic && <Globe width={16} height={16} />}
              {isShared && <Users width={16} height={16} />}
            </div>
          </div>
        ) : null}
      </div>
    );
  },
);

Card.displayName = "Card";
export default Card;
