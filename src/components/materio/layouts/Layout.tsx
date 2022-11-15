import { useEffect, useRef } from "react";
import { LayoutProps } from "./types";
import VerticalLayout from "./VerticalLayout";
import HorizontalLayout from "./HorizontalLayout";
import BottomBarLayout from "./BottomBarLayout";

const Layout = (props: LayoutProps): React.ReactElement => {
  const { hidden, children, settings, saveSettings } = props;
  const isCollapsed = useRef(settings.navCollapsed);
  useEffect(() => {
    if (hidden) {
      if (settings.navCollapsed) {
        saveSettings({ ...settings, navCollapsed: false, layout: "vertical" });
        isCollapsed.current = true;
      } else {
        saveSettings({ ...settings, layout: "vertical" });
      }
    } else {
      if (isCollapsed.current) {
        saveSettings({
          ...settings,
          navCollapsed: true,
          layout: settings.lastLayout,
        });
        isCollapsed.current = false;
      } else {
        saveSettings({ ...settings, layout: settings.lastLayout });
      }
    }
  }, [hidden, saveSettings, settings, settings.navCollapsed]);
  if (hidden) {
    return <BottomBarLayout {...props}>{children}</BottomBarLayout>;
  }
  if (settings.layout === "horizontal") {
    return <HorizontalLayout {...props}>{children}</HorizontalLayout>;
  }
  return <VerticalLayout {...props}>{children}</VerticalLayout>;
};

export default Layout;
