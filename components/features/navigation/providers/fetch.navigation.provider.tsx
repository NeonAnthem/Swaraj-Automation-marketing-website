import getNavigationMenus from "@/data/queries/navigation/navigation.get";
import { PropsWithChildren } from "react";
import NavigationStoreProvider from "./navigation.store.provider";

/**
 * Fetch Navigation content from getNavigationMenus and pass it to the store
 *
 * @param children
 * @returns
 */
export async function NavigationFetchProvider({ children }: PropsWithChildren) {
  const { menus, cta } = await getNavigationMenus();

  // Pass Fetched navigation data to store
  return (
    <NavigationStoreProvider menus={menus} cta={cta}>
      {children}
    </NavigationStoreProvider>
  );
}
