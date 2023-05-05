import React, { ComponentPropsWithRef, forwardRef, Ref } from "react";

import { useOdeIcons } from "@ode-react-ui/hooks";
import { Files, Globe, Options, Users } from "@ode-react-ui/icons";
import { OneProfile } from "@ode-react-ui/icons/nav";
import clsx from "clsx";
import { IWebApp } from "ode-ts-client";

import { AppIcon } from "../AppIcon";
import { Avatar } from "../Avatar";
import { IconButton } from "../Button";
import { Image } from "../Image";
import { Tooltip } from "../Tooltip";

export interface CardProps extends ComponentPropsWithRef<"div"> {
  /**
   * To show the icon of an application
   */
  app?: IWebApp;
  /**
   * Person who created resource
   * */
  creatorName?: string;
  /**
   * Name of resource or Folder
   * */
  name?: string;
  /**
   * Updated time
   */
  updatedAt?: string;
  /**
   * Shared number
   */
  people?: string;
  /**
   * Display Card as Folder
   */
  isFolder?: boolean;
  /**
   * Show selected Card
   */
  isSelected?: boolean;
  /**
   * Add animation to the Card Component
   */
  isAnimated?: boolean;
  /**
   * Show icon if resource is shared
   */
  isShared?: boolean;
  /**
   * Show icon if resource is public
   */
  isPublic?: boolean;
  /**
   * Skeleton Card
   * */
  isLoading?: boolean;
  /**
   * Optional class for styling purpose
   */
  className?: string;
  /**
   * If Resource has image, `src` props shows the image
   */
  resourceSrc?: string;
  /**
   * User Image Profile
   */
  userSrc?: string;
  /**
   * Action to open a single resource
   */
  onOpen?: () => void;
  /**
   * Select Card and Open ActionBar
   */
  onSelect?: () => void;
  /**
   * Message tooltip icon Public
   */
  messagePublic?: string;
  /**
   * Message tooltip icon Shared
   */
  messageShared?: string;
}

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
      "card-title body text-break text-truncate text-truncate--2 pe-16",
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

    const appCode = app ? getIconCode(app) : "placeholder";

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
          alt=""
          src={resourceSrc}
          width="80"
          height="80"
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
      <Avatar
        alt={creatorName}
        size="xs"
        src={userSrc}
        variant="circle"
        width="24"
        height="24"
      />
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
          className="position-absolute bottom-0 end-0 top-0 start-0 opacity-0 z-1 w-100"
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
                <Tooltip message={messagePublic} placement="top">
                  <Globe width={16} height={16} />
                </Tooltip>
              )}

              {isShared && (
                <Tooltip message={messageShared} placement="top">
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
