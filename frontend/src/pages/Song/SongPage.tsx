import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SongHeader from "./component/SongHeader";
import { DrawerContext } from "../../context/DrawerContext";
import SongTable from "./component/SongTable";
import AddSongDrawer from "./component/AddSongDrawer";
import useFetchContent from "../../hooks/useFetchData";
import { Modal } from "antd";
import Text from "../../components/Atomic/Text";
import EditSongForm from "./component/EditSongForm";

const SongPage = () => {
  const { id } = useParams();
  const [allSong, setAllSong] = useState<any>(null);

  const [editSongData, setEditSongData] = useState<any>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const { drawerOpen, handleDrawer } = useContext(DrawerContext);
  const handleDrawerOpen = () => {
    handleDrawer();
  };
  const { isLoading, getData } = useFetchContent();

  const handleModalOpen = (song: any) => {
    setEditSongData(song);
    setModalOpen(true);
  };

  const fetchAllSong = async () => {
    const endPoint = "song";
    const response = await getData(endPoint, id);
    if (response?.status === 200) {
      setAllSong(response?.data?.data);
    }
  };
  useEffect(() => {
    fetchAllSong();
  }, []);

  return (
    <>
      <div className="flex flex-col justify-start items-start gap-4 w-[100%]">
        <SongHeader handleDrawerOpen={handleDrawerOpen} />
        <SongTable
          songData={allSong}
          loading={isLoading}
          fetchSong={fetchAllSong}
          handleModalOpen={handleModalOpen}
        />
      </div>
      <AddSongDrawer
        handleDrawerOpen={handleDrawerOpen}
        drawerOpen={drawerOpen}
        fetchSong={fetchAllSong}
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
          <Text size="18px" weight="400" content="Edit the song" />
          <div className="flex justify-center items-center gap-4">
            <EditSongForm
              data={editSongData}
              fetchSong={fetchAllSong}
              closeModal={setModalOpen}
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default SongPage;
