import { Link } from "react-router-dom";
import Text from "../Atomic/Text";
import { MenuItems } from "./MenuItems";
import { IMenuItems } from "../../Interface/Interface";

const Sidebar = () => {
  const menuItems = MenuItems?.filter(
    (item: IMenuItems) => item?.label !== "Settings"
  );


  return (
    <>
      <div className="flex flex-col h-[100%] px-4 py-4 gap-4 shadow-xl">
        <div className="flex py-6 justify-center items-center h-[10%]">
          <Text size="24px" weight="400" content="Artist Mgmt" />
        </div>
        <div className="flex flex-col justify-between items-between h-[100%]">
          <div className="flex flex-col justify-start items-between gap-4 w-[100%] h-[100%] ">
            {menuItems?.map((item: IMenuItems) => (
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
        </div>
      </div>
    </>
  );
};

export default Sidebar;
