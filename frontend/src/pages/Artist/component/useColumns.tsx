import { ColumnsType } from "antd/es/table";
import { Link } from "react-router-dom";
import Text from "../../../components/Atomic/Text";
import { APP, SONG, USER } from "../../../config/path";
import MoreOptions from "../../../components/Atomic/MoreOptions";
import { Tooltip } from "antd";

export const displayGender = (gender: string) => {
  if (gender === "m") {
    return "Male";
  } else if (gender === "f") {
    return "Female";
  } else {
    return "Other";
  }
};
export const useColumns = (onEdit: any, onDelete: any) => {
  const column: ColumnsType<any> = [
    {
      title: <div>Name</div>,
      width: 150,
      render: ({ name, id }: any) => {
        return (
          <>
            <Tooltip title="View Songs" placement="topLeft">
              <Link to={`/${APP}/${SONG}/${id}`}>
                <Text size="16px" weight="400" content={name} />
              </Link>
            </Tooltip>
          </>
        );
      },
    },
    {
      title: <div>Gender</div>,
      width: 150,
      render: ({ gender }: any) => {
        return (
          <>
            <div>
              <Text size="16px" weight="400" content={displayGender(gender)} />
            </div>
          </>
        );
      },
    },
    {
      title: <div>Date of Birth (A.D)</div>,
      width: 150,
      render: ({ dob }: any) => {
        return (
          <>
            <div>
              <Text size="16px" weight="400" content={`${dob}`} />
            </div>
          </>
        );
      },
    },
    {
      title: <div>First Release Year</div>,
      width: 150,
      render: ({ first_release_year }: any) => {
        return (
          <>
            <div>
              <Text
                size="16px"
                weight="400"
                content={`${first_release_year}`}
              />
            </div>
          </>
        );
      },
    },
    {
      title: <div>No. of Album Released</div>,
      width: 150,
      render: ({ no_of_album_released }: any) => {
        return (
          <>
            <div>
              <Text
                size="16px"
                weight="400"
                content={`${no_of_album_released}`}
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
          <MoreOptions
            data={record}
            onEdit={onEdit}
            onDelete={() => onDelete(record?._id)}
          />
        );
      },
      width: "40px",
    },
  ];
  return { column };
};
