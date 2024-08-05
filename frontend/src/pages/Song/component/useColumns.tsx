import { Link } from "react-router-dom";
import MoreOptions from "../../../components/Atomic/MoreOptions";
import Text from "../../../components/Atomic/Text";
import { ColumnsType } from "antd/es/table";
import SongOptions from "./SongOptions";

export const useColumns = (onEdit: any, onDelete: any) => {
  const column: ColumnsType<any> = [
    {
      title: <div>Title</div>,
      width: 150,
      render: ({ title, id }: any) => {
        return (
          <>
            <Text size="16px" weight="400" content={title} />
          </>
        );
      },
    },
    {
      title: <div>Album name</div>,
      width: 150,
      render: ({ album_name, id }: any) => {
        return (
          <>
            <Text size="16px" weight="400" content={album_name} />
          </>
        );
      },
    },
    {
      title: <div>Genre</div>,
      width: 150,
      render: ({ genre }: any) => {
        return (
          <>
            <div>
              <Text
                size="16px"
                weight="400"
                content={genre}
                className="capitalize"
              />
            </div>
          </>
        );
      },
    },

    {
      title: "",
      fixed: "right",
      align: "center",
      key: "",
      render: (_, record) => {
        return (
          <SongOptions
            data={record}
            onEdit={onEdit}
            onDelete={() => onDelete(record)}
          />
        );
      },
      width: "40px",
    },
  ];
  return { column };
};
