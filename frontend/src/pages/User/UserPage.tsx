import React, { useContext, useEffect, useState } from "react";
import UserHeader from "./component/UserHeader";
import UserTable from "./component/UserTable";
import AddUserDrawer from "./component/AddUserDrawer";
import { DrawerContext } from "../../context/DrawerContext";
import useFetchContent from "../../hooks/useFetchData";

const UserPage = () => {
  const [allProduct, setAllProduct] = useState<any>([]);
  const { isLoading, getData } = useFetchContent();
  const { drawerOpen, handleDrawer } = useContext(DrawerContext);
  const handleDrawerOpen = () => {
    handleDrawer();
  };

  const fetchAllProduct = async () => {
    const endPoint = "user/all";
    const response = await getData(endPoint);
    if (response?.status === 200) {
      setAllProduct(response?.data?.data);
    }
  };
  useEffect(() => {
    fetchAllProduct();
  }, []);
  return (
    <>
      <div className="flex flex-col justify-start items-start gap-4 w-[100%]">
        <UserHeader handleDrawerOpen={handleDrawerOpen} />
        <UserTable
          productData={allProduct}
          loading={isLoading}
          fetchProduct={fetchAllProduct}
          handleDrawerOpen={handleDrawerOpen}
        />
      </div>
      <AddUserDrawer />
    </>
  );
};

export default UserPage;
