import { ColumnsType } from "antd/es/table";
import { Link } from "react-router-dom";
import Text from "../../../components/Atomic/Text";
import { APP, USER } from "../../../config/path";
import MoreOptions from "../../../components/Atomic/MoreOptions";

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
      title: <div>First name</div>,
      width: 150,
      render: ({ first_name, id }: any) => {
        return (
          <>
            <Link to={`/${APP}/${USER}`}>
              <Text size="16px" weight="400" content={first_name} />
            </Link>
          </>
        );
      },
    },
    {
      title: <div>Last name</div>,
      width: 150,
      render: ({ last_name, id }: any) => {
        return (
          <>
            <Link to={`/${APP}/${USER}`}>
              <Text size="16px" weight="400" content={last_name} />
            </Link>
          </>
        );
      },
    },
    {
      title: <div>Email</div>,
      width: 150,
      render: ({ email }: any) => {
        return (
          <>
            <div>
              <Text size="16px" weight="400" content={email} />
            </div>
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
      title: <div>Phone</div>,
      width: 150,
      render: ({ phone }: any) => {
        return (
          <>
            <div>
              <Text size="16px" weight="400" content={phone} />
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
      title: <div>Address</div>,
      width: 150,
      render: ({ address }: any) => {
        return (
          <>
            <div>
              <Text size="16px" weight="400" content={`${address}`} />
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
            onDelete={() => onDelete(record?.id)}
          />
        );
      },
      width: "40px",
    },
  ];
  return { column };
};
