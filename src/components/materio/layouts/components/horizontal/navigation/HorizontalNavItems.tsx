import { HorizontalNavItemsType, NavGroup, NavLink } from "../../../types";
import HorizontalNavLink from "./HorizontalNavLink";
// eslint-disable-next-line import/no-cycle
import HorizontalNavGroup from "./HorizontalNavGroup";

interface Props {
  readonly hasParent?: boolean;
  readonly horizontalNavItems?: HorizontalNavItemsType;
  readonly mobile?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const resolveComponent = (item: NavGroup | NavLink): any => {
  if ((item as NavGroup).children) {
    return HorizontalNavGroup;
  }
  return HorizontalNavLink;
};
const HorizontalNavItems = (props: Props): JSX.Element => {
  const RenderMenuItems = props.horizontalNavItems?.map(
    (item: NavGroup | NavLink, index: number) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const TagName: any = resolveComponent(item);
      return <TagName {...props} key={index} item={item} />;
    },
  );
  return <>{RenderMenuItems}</>;
};
export default HorizontalNavItems;
