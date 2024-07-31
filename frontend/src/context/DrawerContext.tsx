import { createContext, useState } from "react";

const defaultValue: any = {
  drawerOpen: false,
  userId: null,
  handleUserId: () => {},
  handleDrawer: () => {},
};

export const DrawerContext = createContext<any>(defaultValue);

export const DrawerContextProvider = ({ children }: any) => {
  const [userId, setUserId] = useState<any>(null);
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const handleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  const handleUserId = (userId: any) => {
    setUserId(userId);
  };
  return (
    <DrawerContext.Provider
      value={{
        drawerOpen,
        userId,
        handleDrawer,
        handleUserId,
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
};
