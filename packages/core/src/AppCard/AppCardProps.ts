import React, { ReactNode } from "react";

import { IWebApp } from "ode-ts-client";

import { HeadingProps } from "../Heading/HeadingProps";
import {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from "../utils/create-polymorphic-component";

type AppHeadingProps = Pick<HeadingProps, "level" | "headingStyle">;

export type BaseProps = {
  /**
   * Pass all information about an app
   */
  app: IWebApp;
  /**
   * Use as title element (h1, h2)
   */
  isHeading?: boolean;
  /**
   * Passing compounds components
   */
  children?: ReactNode;
  /**
   * Optional class for styling purpose
   */
  className?: string;
} & AppHeadingProps;

export type AppCardProps<T extends React.ElementType> =
  PolymorphicComponentPropsWithRef<T, BaseProps>;

const defaultElement = "div";
export type DefaultElementType = typeof defaultElement;

export type AppCardRef<T extends React.ElementType> = PolymorphicRef<T>;

export type PolymorphicAppCard = <
  T extends React.ElementType = DefaultElementType,
>(
  props: AppCardProps<T>,
) => React.ReactElement | null;
