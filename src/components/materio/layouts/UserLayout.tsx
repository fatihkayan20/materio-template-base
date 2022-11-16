import { Theme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import React, { ReactNode } from "react";
import HorizontalNavItems from "../../../infrastructure/navigation/horizontal";
import VerticalNavItems from "../../../infrastructure/navigation/vertical";
import { useSettings } from "../hooks/useSettings";
import Layout from "../layouts/Layout";
import { HorizontalNavItemsType, VerticalNavItemsType } from "./types";

interface Props {
  children: ReactNode;
}

const UserLayout = ({ children }: Props): React.ReactElement => {
  const { settings, saveSettings } = useSettings();
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));
  const [verticalNavItems, setVerticalNavItems] =
    React.useState<VerticalNavItemsType>([]);
  const [horizontalNavItems, setHorizontalNavItems] =
    React.useState<HorizontalNavItemsType>([]);
  React.useEffect(() => {
    const func = async (): Promise<void> => {
      if (settings.layout === "horizontal") {
        const items = HorizontalNavItems();
        setHorizontalNavItems(items);
      } else {
        const items = VerticalNavItems();
        setVerticalNavItems(items);
      }
    };
    func();
  }, [settings.layout]);
  return (
    <Layout
      hidden={hidden}
      settings={settings}
      saveSettings={saveSettings}
      {...(settings.layout === "horizontal"
        ? {
            horizontalNavItems,
          }
        : {
            verticalNavItems,
          })}>
      {children}
    </Layout>
  );
};
export default UserLayout;
