import { type ReactNode } from "react";

import { Main, useOdeClient } from "@ode-react-ui/core";
import clsx from "clsx";
import { IConfigurationFramework } from "ode-ts-client";
import { Toaster } from "react-hot-toast";

import { Header } from "../Header";

const Layout = ({
  children,
  configurationFramework,
}: {
  children: ReactNode;
  configurationFramework: IConfigurationFramework;
}) => {
  const { is1d, basePath } = useOdeClient();
  return (
    <>
      <Header
        is1d={is1d}
        src={basePath}
        configurationFramework={configurationFramework}
      />
      <Main
        className={clsx("d-flex flex-column bg-white", {
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
