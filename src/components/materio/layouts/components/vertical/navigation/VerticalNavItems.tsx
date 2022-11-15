import React from "react";
import { Settings } from "../../../../context/settingsContext";
import {
  NavGroup,
  NavLink,
  NavSectionTitle,
  VerticalNavItemsType,
} from "../../../types";
// eslint-disable-next-line import/no-cycle
import VerticalNavGroup from "./VerticalNavGroup";
import VerticalNavLink from "./VerticalNavLink";
import VerticalNavSectionTitle from "./VerticalNavSectionTitle";

interface Props {
  readonly parent?: NavGroup;
  readonly navHover?: boolean;
  readonly settings: Settings;
  readonly navVisible?: boolean;
  readonly groupActive: string[];
  readonly isSubToSub?: NavGroup;
  readonly currentActiveGroup: string[];
  readonly navigationBorderWidth: number;
  readonly verticalNavItems?: VerticalNavItemsType;
  readonly saveSettings: (values: Settings) => void;
  readonly setGroupActive: (value: string[]) => void;
  readonly setCurrentActiveGroup: (item: string[]) => void;
}

const resolveNavItemComponent = (
  item: NavGroup | NavLink | NavSectionTitle,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): any => {
  if ((item as NavSectionTitle).sectionTitle) {
    return VerticalNavSectionTitle;
  }
  if ((item as NavGroup).children) {
    return VerticalNavGroup;
  }
  return VerticalNavLink;
};
const VerticalNavItems = (props: Props): React.ReactElement => {
  // ** Props
  const { verticalNavItems } = props;
  const RenderMenuItems = verticalNavItems?.map(
    (item: NavGroup | NavLink | NavSectionTitle, index: number) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const TagName: any = resolveNavItemComponent(item);
      return <TagName {...props} key={index} item={item} />;
    },
  );
  return <>{RenderMenuItems}</>;
};
export default VerticalNavItems;
