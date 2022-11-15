import "../../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
import themeConfig from "../components/materio/configs/themeConfig";
import { Router } from "next/router";
import NProgress from "nprogress";
import {
  SettingsConsumer,
  SettingsProvider,
} from "../components/materio/context/settingsContext";
import { NextPage } from "next";
import React from "react";
import ThemeComponent from "../components/materio/theme/ThemeComponent";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { createEmotionCache } from "../components/materio/utils/create-emotion-cache";
import UserLayout from "../components/materio/layouts/UserLayout";
import { Configuration } from "../infrastructure/common/Configuration";

export type NextPageWithLayout = NextPage & {
  readonly getLayout?: (page: React.ReactElement) => React.ReactNode;
  readonly authGuard?: boolean;
  readonly guestGuard?: boolean;
  readonly setConfig?: () => void;
};

type ExtendedAppProps = AppProps & {
  readonly Component: NextPageWithLayout;
  readonly emotionCache: EmotionCache;
  readonly session: Session;
};

const clientSideEmotionCache = createEmotionCache();
if (themeConfig.routingLoader) {
  Router.events.on("routeChangeStart", () => {
    NProgress.start();
  });
  Router.events.on("routeChangeError", () => {
    NProgress.done();
  });
  Router.events.on("routeChangeComplete", () => {
    NProgress.done();
  });
}

const MyApp = ({
  pageProps,
  session,
  Component,
  emotionCache = clientSideEmotionCache,
}: ExtendedAppProps): React.ReactNode => {
  const setConfig = Component.setConfig ?? undefined;
  const getLayout =
    Component.getLayout ??
    ((page: React.ReactNode): React.ReactNode => (
      <UserLayout>{page}</UserLayout>
    ));

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Medner</title>
        <meta name={"description"} content={"Medner application"} />
        <meta name={"keywords"} content={"Medner"} />
        <meta
          name={"viewport"}
          content={"initial-scale=1, width=device-width"}
        />
      </Head>
      <SessionProvider session={session}>
        <SettingsProvider {...(setConfig ? { pageSettings: setConfig() } : {})}>
          <SettingsConsumer>
            {({ settings }): React.ReactNode => {
              return (
                <ThemeComponent settings={settings}>
                  {getLayout(<Component {...pageProps} />)}
                </ThemeComponent>
              );
            }}
          </SettingsConsumer>
        </SettingsProvider>
        <Configuration />
      </SessionProvider>
    </CacheProvider>
  );
};

export default MyApp;
