import { MdOutlineEdit } from "react-icons/md";

import { Dropdown } from "antd";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaRegTrashAlt } from "react-icons/fa";
import Text from "../../../components/Atomic/Text";

const SongOptions = ({ data, onEdit, onDelete }: any) => {
  const items: any = [
    {
      key: "edit",
      label: (
        <>
          <div className="flex flex-row justify-start items-center gap-2">
            <MdOutlineEdit />
            <Text size="14px" weight="400" content="Edit Song" />
          </div>
        </>
      ),
    },
    {
      key: "delete",
      label: (
        <>
          <div className="flex flex-row justify-start items-center gap-2">
            <FaRegTrashAlt />
            <Text size="14px" weight="400" content="Delete" />
          </div>
        </>
      ),
    },
  ];

  const menuClick = (e: any) => {
    if (e.key === "edit") {
      onEdit(data?.title);
    } else if (e.key === "delete") {
        console.log(data)
      onDelete(data);
    }
  };
  const menuProps = {
    items,
    onClick: menuClick,
  };
  return (
    <>
      <Dropdown
        menu={menuProps}
        trigger={["hover"]}
        className="hover:cursor-pointer"
        placement="bottomRight"
      >
        <IoEllipsisVertical className="text-black" />
      </Dropdown>
    </>
  );
};
export default SongOptions;
