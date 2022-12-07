interface AsProp<C extends React.ElementType> {
    as?: C;
}
declare type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P);
declare type PolymorphicComponentProp<C extends React.ElementType, Props = {}> = React.PropsWithChildren<Props & AsProp<C>> & Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;
export declare type PolymorphicComponentPropWithRef<C extends React.ElementType, Props = {}> = PolymorphicComponentProp<C, Props> & {
    ref?: PolymorphicRef<C>;
};
export declare type PolymorphicRef<C extends React.ElementType> = React.ComponentPropsWithRef<C>["ref"];
export {};
