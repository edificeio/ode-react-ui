export interface AppProps<T, B> {
  address: T;
  casType?: T;
  display: B;
  displayName: T;
  icon: T;
  isExternal: B;
  name: T;
  prefix?: T;
  scope: Array<T>;
  target?: any;
}
