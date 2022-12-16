import React, { ReactNode } from "react";

import { HeadingProps } from "../Heading/HeadingProps";
/* import {
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
} from "../utils/create-polymorphic-component"; */
import {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from "../utils/create-polymorphic-component";

type AppHeadingProps = Pick<HeadingProps, "level" | "headingStyle">;

export type BaseProps = {
  /**
   * Pass all information about an app
   */
  app: any;
  /**
   * Use as title element (h1, h2)
   */
  isHeading?: boolean;
  /**
   * Passing compounds components
   */
  children?: ReactNode;
  /**
   * Title, Card Component, ...
   */
  variant?: "title" | "square";
  /**
   * Additional ClassName for styling purpose
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
