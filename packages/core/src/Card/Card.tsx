import React, { forwardRef, Ref } from "react";

import { Files, Options, Users } from "@ode-react-ui/icons";
import { OneProfile } from "@ode-react-ui/icons/nav";
import clsx from "clsx";

import { Avatar } from "../Avatar";
import { IconButton } from "../Button";
import { CardProps } from "./CardProps";

const Card = forwardRef(
  (
    {
      name = "Resource",
      updatedAt = "2 days ago",
      creatorName = "tom.mate",
      isSelected = false,
      isFolder = false,
      isAnimated = false,
      appCode = "placeholder",
      people = "23",
      src = "",
      isLoading = false,
      className,
      onSelect,
      onOpen,
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

    const classesName = clsx("small", {
      placeholder: isLoading,
    });

    const classesProfile = clsx("d-inline-flex align-items-center gap-8", {
      placeholder: isLoading,
    });

    const classesPeople = clsx(
      "d-inline-flex align-items-center gap-4 caption",
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
              isIconUrl={!!src}
              variant="square"
              appCode={appCode}
              src={src}
              className={classesAvatar}
            />
          )}
          <div>
            <h3 className={classesTitle}>
              <strong>{name}</strong>
            </h3>
            {!isFolder ? (
              <p className="card-text small">
                {/* <em>{dayjs(updatedAt).format("DD/MM/YYYY")}</em> */}
                {/* <em>{dayjs(updatedAt).fromNow()}</em> */}
                <em className={classesText}>{updatedAt}</em>
              </p>
            ) : null}
          </div>
        </div>
        {!isFolder ? (
          <div className="card-footer" role="contentinfo">
            <div className={classesProfile}>
              <OneProfile />
              <p className={classesName}>{creatorName}</p>
            </div>
            <p className={classesPeople}>
              <Users width={16} height={16} />
              <strong className="small">{people}</strong>
            </p>
          </div>
        ) : null}
      </div>
    );
  },
);

Card.displayName = "Card";
export default Card;
