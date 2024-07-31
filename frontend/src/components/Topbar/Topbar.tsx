import { Avatar } from "antd";
import Text from "../Atomic/Text";
import { CiLogout } from "react-icons/ci";
import { StyledPopover } from "./Style";
import profile from "../../assets/images/profile.jpg";
import Button from "../Atomic/Button";
const PopoverContent = () => {
  const userInfo = JSON.parse(localStorage.getItem("userinfo") as any);

  const handleLogout = () => {
    console.log("Logout");
  };
  return (
    <>
      <div className="flex w-[200px] flex-col justify-start items-start gap-4">
        <div className="flex flex-col justify-start items-start">
          <Text size="22px" weight="500" content={userInfo?.[0]?.fullName} />
          <Text size="16px" weight="400" content={userInfo?.[0]?.email} />
        </div>
        <div className="flex flex-col justify-start items-start w-[100%]">
          <Button
            label="Logout"
            onclick={handleLogout}
            icon={<CiLogout className="text-[white] text-[22px] font-[600]" />}
            style={{
              background: "#df4c41",
              width: "100%",
              borderRadius: "8px",
              justifyContent: "between",
            }}
          />
        </div>
      </div>
    </>
  );
};
const Topbar = () => {
  return (
    <>
      <div className="shadow-md w-[100%] px-4 py-6 flex justify-between items-center">
        <Text size="18px" weight="500" content="Artist Mgmt" />
        <StyledPopover
          trigger={"click"}
          placement="bottomLeft"
          content={<PopoverContent />}
        >
          <Avatar
            src={profile}
            size={42}
            shape="circle"
            className="cursor-pointer border-[2px] border-black"
          />
        </StyledPopover>
      </div>
    </>
  );
};

export default Topbar;
