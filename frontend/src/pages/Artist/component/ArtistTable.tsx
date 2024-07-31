import { Modal, Table, notification } from "antd";
import { useContext, useState } from "react";

import { IoTrashBin } from "react-icons/io5";

import { BsCheckCircleFill } from "react-icons/bs";
import { BiSolidErrorCircle } from "react-icons/bi";
import { DrawerContext } from "../../../context/DrawerContext";
import Text from "../../../components/Atomic/Text";
import Button from "../../../components/Atomic/Button";
import useDeleteContent from "../../../hooks/useDeleteContent";
import { useColumns } from "./useColumns";

const ArtistTable = (props: any) => {
  const { artistData, loading, fetchArtist, handleDrawerOpen } = props;

  const [showModal, setShowModal] = useState<boolean>(false);

  const { deleteContent } = useDeleteContent();
  const { handleUserId, userId } = useContext(DrawerContext);
  const onEdit = (id: string) => {
    handleUserId(id);
    handleDrawerOpen();
  };
  const onDelete = (id: string) => {
    setShowModal(true);
    handleUserId(id);
  };
  const handleDeleteArtist = async () => {
    const endPoint = `artist/delete/${userId}`;
    const response = await deleteContent(endPoint);
    if (response?.status === 200) {
      notification.success({
        message: "Artist deleted Successfully",
        duration: 3,
        icon: <BsCheckCircleFill style={{ color: "green" }} />,
      });
      fetchArtist();
      setShowModal(false);
    } else {
      notification.error({
        message: "Error deleting the Artist",
        duration: 3,
        icon: <BiSolidErrorCircle style={{ color: "red" }} />,
      });
    }
  };
  const { column } = useColumns(onEdit, onDelete);
  return (
    <>
      <div className="w-[100%] h-[75vh]">
        <Table
          dataSource={artistData}
          columns={column}
          pagination={false}
          scroll={{ y: 600 }}
          className="px-8"
          loading={loading}
        />
      </div>
      <Modal
        open={showModal}
        destroyOnClose
        centered
        closable={true}
        maskClosable={true}
        footer={false}
        closeIcon={false}
        onCancel={() => setShowModal(false)}
      >
        <div className="flex flex-col justify-center items-center gap-8">
          <Text
            size="18px"
            weight="400"
            content="Are you sure to delete the artist?"
          />
          <div className="flex justify-center items-center gap-4">
            <Button
              label="Cancel"
              onclick={() => {}}
              className="border-accent border-[1px] rounded-lg"
            />
            <Button
              label="Delete"
              onclick={handleDeleteArtist}
              icon={<IoTrashBin className="text-[18px] text-white" />}
              style={{ background: "var(--accent-color)", borderRadius: "8px" }}
              className="rounded-lg"
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ArtistTable;