import { createContext, useState } from "react";

const defaultValue: any = {
  drawerOpen: false,
  productId: null,
  handleProductId: () => {},
  handleDrawer: () => {},
};

export const DrawerContext = createContext<any>(defaultValue);

export const DrawerContextProvider = ({ children }: any) => {
  const [productId, setProductId] = useState<any>(null);
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const handleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  const handleProductId = (productId: any) => {
    setProductId(productId);
  };
  return (
    <DrawerContext.Provider
      value={{
        drawerOpen,
        productId,
        handleDrawer,
        handleProductId,
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
};
