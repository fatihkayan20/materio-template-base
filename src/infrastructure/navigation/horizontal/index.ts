import { Feed, Person, Search, Sell } from "@mui/icons-material";
import {
  HorizontalNavItemsType,
  LoginType,
} from "../../../components/materio/layouts/types";

const navigation = (): HorizontalNavItemsType => {
  return [
    {
      title: "menu.news",
      path: "/news",
      icon: Feed,
    },
    {
      title: "menu.products",
      path: "/products",
      icon: Sell,
    },
    {
      title: "menu.blog",
      path: "/blog",
      icon: Search,
    },
    {
      title: "menu.profile.index",
      path: "/profile",
      icon: Person,
      loginType: [LoginType.MainUser, LoginType.SubUser],
    },
  ];
};
export default navigation;
