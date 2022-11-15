import { Feed } from "@mui/icons-material";
import {
  LoginType,
  VerticalNavItemsType,
} from "../../../components/materio/layouts/types";

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: "menu.news",
      path: "/news",
      icon: Feed,
      loginType: [LoginType.All],
    },
  ];
};
export default navigation;
