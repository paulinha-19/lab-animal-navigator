import { Href } from "expo-router";
import { Router } from "expo-router";

export const navigateTo = (
  path: Href,
  setShowDrawer: (value: React.SetStateAction<boolean>) => void,
  router: Router
) => {
  setShowDrawer(false);
  router.push(path);
};
