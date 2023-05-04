import { type ReactNode } from "react";

import { Main, useOdeClient } from "@ode-react-ui/core";
import clsx from "clsx";
import { Toaster } from "react-hot-toast";

import { Header } from "../Header";

const Layout = ({ children }: { children: ReactNode }) => {
  const { is1d, basePath, configurationFramework } = useOdeClient();
  return (
    <>
      <Header
        is1d={is1d}
        src={basePath}
        configurationFramework={configurationFramework}
      />
      <Main
        className={clsx("container-fluid bg-white", {
          "rounded-4 border": is1d,
          "mt-24": is1d,
        })}
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
