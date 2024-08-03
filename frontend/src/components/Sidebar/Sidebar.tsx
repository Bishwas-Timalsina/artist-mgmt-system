import { Link } from "react-router-dom";
import Text from "../Atomic/Text";
import { MenuItems } from "./MenuItems";
import { IMenuItems } from "../../Interface/Interface";
import Button from "../Atomic/Button";
import { CiLogout } from "react-icons/ci";
import { Modal } from "antd";
import { useState } from "react";
import { IoTrashBin } from "react-icons/io5";
import { useAuth } from "../../context/AuthContext";

const Sidebar = () => {
  const [showLogoutModal, setShowLogoutModal] = useState<boolean>(false);
  const { logout } = useAuth();

  const handleLogout = () => {
    console.log("Logout");
    logout();
  };
  return (
    <>
      <div className="flex flex-col h-[100%] px-4 py-4 gap-4 shadow-xl">
        <div className="flex py-6 justify-center items-center h-[10%]">
          <Text size="24px" weight="400" content="Artist Mgmt" />
        </div>
        <div className="flex flex-col justify-between items-between h-[100%]">
          <div className="flex flex-col justify-start items-between gap-4 w-[100%] h-[100%] ">
            {MenuItems?.map((item: IMenuItems) => (
              <>
                <Link
                  to={item?.key}
                  className="flex flex-row justify-start items-center gap-4 hover:bg-accent hover:text-white group w-[100%] py-2 px-1 rounded-md"
                >
                  <div className="text-[32px] text-accent group-hover:text-white">
                    {item?.icon}
                  </div>
                  <p>{item?.label}</p>
                </Link>
              </>
            ))}
          </div>
          <Button
            label="Logout"
            onclick={() => setShowLogoutModal(true)}
            icon={<CiLogout className="text-[white] text-[22px] font-[600]" />}
            style={{
              background: "var(--accent-color)",
              width: "100%",
              borderRadius: "8px",
              justifyContent: "between",
            }}
          />
        </div>
      </div>

      <Modal
        open={showLogoutModal}
        destroyOnClose
        centered
        closable={true}
        maskClosable={true}
        footer={false}
        closeIcon={false}
        onCancel={() => setShowLogoutModal(false)}
      >
        <div className="flex flex-col justify-center items-center gap-8">
          <Text size="18px" weight="600" content="Confirm Logout" />
          <div className="flex justify-center items-center gap-4">
            <Button
              label="Cancel"
              onclick={() => {}}
              className="border-accent border-[1px] rounded-lg"
            />
            <Button
              label="Confirm"
              onclick={handleLogout}
              style={{ background: "var(--accent-color)", borderRadius: "8px" }}
              className="rounded-lg"
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Sidebar;
