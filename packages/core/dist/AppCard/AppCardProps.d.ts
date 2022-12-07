import React, { ReactNode } from "react";
import { HeadingProps } from "../Heading/HeadingProps";
import { PolymorphicComponentPropWithRef, PolymorphicRef } from "../utils/create-polymorphic-component";
declare type AppHeadingProps = Pick<HeadingProps, "level" | "headingStyle">;
export declare type BaseProps = {
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
    variant?: string;
} & AppHeadingProps;
export declare type AppCardProps<T extends React.ElementType> = PolymorphicComponentPropWithRef<T, BaseProps>;
declare const defaultElement = "div";
export declare type DefaultElementType = typeof defaultElement;
export declare type AppCardRef<T extends React.ElementType> = PolymorphicRef<T>;
export declare type PolymorphicAppCard = <T extends React.ElementType = DefaultElementType>(props: AppCardProps<T>) => React.ReactElement | null;
export {};
