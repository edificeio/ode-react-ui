import { ComponentPropsWithoutRef, type ReactNode } from "react";

import { Main } from "@ode-react-ui/components";
import { useTheme } from "@ode-react-ui/core";
import clsx from "clsx";
import { Toaster } from "react-hot-toast";

import { Header } from "../Header";

export interface LayoutProps extends ComponentPropsWithoutRef<any> {
  children: ReactNode;
}

const Layout = ({ children, ...restProps }: { children: ReactNode }) => {
  const { theme } = useTheme();
  return (
    <>
      <Header is1d={theme?.is1d} src={theme?.basePath} />
      <Main
        className={clsx("d-flex flex-column bg-white", {
          "rounded-4 border": theme?.is1d,
          "mt-24": theme?.is1d,
        })}
        {...restProps}
      >
        {children}
      </Main>
      <Toaster
        toastOptions={{
          position: "top-right",
        }}
      />
    </>
  );
};

Layout.displayName = "Layout";

export default Layout;
