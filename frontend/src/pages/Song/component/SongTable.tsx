import { Modal, Table } from "antd";
import React, { useState } from "react";
import { useColumns } from "./useColumns";
import Text from "../../../components/Atomic/Text";
import Button from "../../../components/Atomic/Button";
import { IoTrashBin } from "react-icons/io5";

const SongTable = (props: any) => {
  const { songData, loading, fetchSong, handleModalOpen } = props;

  const [showModal, setShowModal] = useState<boolean>(false);

  const onEdit = (title: string) => {
    console.log(title);
    const filteredSong = songData?.filter((song: any) => song?.title === title);
    handleModalOpen(filteredSong);
  };
  const onDelete = (songName: string) => {
    setShowModal(true);
    // handleSongName(songName)
  };
  const { column } = useColumns(onEdit, onDelete);
  return (
    <>
      <Table
        dataSource={songData}
        columns={column}
        pagination={false}
        scroll={{ y: 600 }}
        className="px-8"
        loading={loading}
      />
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
            content="Are you sure to delete the song?"
          />
          <div className="flex justify-center items-center gap-4">
            <Button
              label="Cancel"
              onclick={() => {}}
              className="border-accent border-[1px] rounded-lg"
            />
            <Button
              label="Delete"
              // onclick={handleDeleteUser}
              onclick={() => console.log("hello")}
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

export default SongTable;
