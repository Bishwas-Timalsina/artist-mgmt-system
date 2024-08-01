import React, { useContext, useEffect, useState } from "react";
import UserHeader from "./component/UserHeader";
import UserTable from "./component/UserTable";
import AddUserDrawer from "./component/AddUserDrawer";
import { DrawerContext } from "../../context/DrawerContext";
import useFetchContent from "../../hooks/useFetchData";

const UserPage = () => {
  const [allUser, setAllUser] = useState<any>([]);
  const { isLoading, getData } = useFetchContent();
  const { drawerOpen, handleDrawer } = useContext(DrawerContext);
  const handleDrawerOpen = () => {
    handleDrawer();
  };

  const fetchAllUser = async () => {
    const endPoint = "user/all";
    const response = await getData(endPoint);
    if (response?.status === 200) {
      setAllUser(response?.data?.data);
    }
  };
  useEffect(() => {
    fetchAllUser();
  }, []);
  return (
    <>
      <div className="flex flex-col justify-start items-start gap-4 w-[100%]">
        <UserHeader handleDrawerOpen={handleDrawerOpen} />
        <UserTable
          userData={allUser}
          loading={isLoading}
          fetchUser={fetchAllUser}
          handleDrawerOpen={handleDrawerOpen}
        />
      </div>
      <AddUserDrawer
        handleDrawerOpen = {handleDrawerOpen}
        drawerOpen ={drawerOpen}
        fetchUser  ={fetchAllUser}
      />
    </>
  );
};

export default UserPage;
