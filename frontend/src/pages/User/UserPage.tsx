import React, { useContext, useEffect, useState } from "react";
import UserHeader from "./component/UserHeader";
import UserTable from "./component/UserTable";
import AddUserDrawer from "./component/AddUserDrawer";
import { DrawerContext } from "../../context/DrawerContext";
import useFetchContent from "../../hooks/useFetchData";
import { Modal } from "antd";
import Text from "../../components/Atomic/Text";
import EditUserForm from "./component/EditUserForm";

const UserPage = () => {
  const [allUser, setAllUser] = useState<any>([]);
  const { isLoading, getData } = useFetchContent();
  const { drawerOpen, handleDrawer } = useContext(DrawerContext);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [editUserData, setEditUserData] = useState<any>(null);

  const handleDrawerOpen = () => {
    handleDrawer();
  };

  const handleModalOpen = (userData: any) => {
    console.log(userData);
    setEditUserData(userData);
    setModalOpen(true);
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
          handleModalOpen={handleModalOpen}
        />
      </div>
      <AddUserDrawer
        handleDrawerOpen={handleDrawerOpen}
        drawerOpen={drawerOpen}
        fetchUser={fetchAllUser}
      />
      <Modal
        open={modalOpen}
        destroyOnClose
        centered
        closable={true}
        maskClosable={true}
        footer={false}
        closeIcon={false}
        onCancel={() => setModalOpen(false)}
      >
        <div className="flex flex-col justify-center items-center gap-8">
          <Text size="18px" weight="400" content="Edit the user detail" />
          <div className="flex justify-center items-center gap-4">
            <EditUserForm data={editUserData} />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default UserPage;
