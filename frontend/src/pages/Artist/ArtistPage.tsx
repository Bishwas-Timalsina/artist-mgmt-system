import { useContext, useEffect, useState } from "react";
import { DrawerContext } from "../../context/DrawerContext";
import useFetchContent from "../../hooks/useFetchData";
import ArtistHeader from "./component/ArtistHeader";
import ArtistTable from "./component/ArtistTable";
import AddArtistDrawer from "./component/AddArtistDrawer";
import { Modal } from "antd";
import Text from "../../components/Atomic/Text";
import EditArtistForm from "./component/EditArtistForm";

const ArtistPage = () => {
  const [allArtist, setAllArtist] = useState<any>([]);
  const { isLoading, getData } = useFetchContent();
  const { drawerOpen, handleDrawer } = useContext(DrawerContext);

  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [editArtistData, setEditArtistData] = useState<any>(null);

  const handleDrawerOpen = () => {
    handleDrawer();
  };

  const handleModalOpen = (artistData: any) => {
    setEditArtistData(artistData);
    setModalOpen(true);
  };
  const fetchallArtist = async () => {
    const endPoint = "artist";
    const response = await getData(endPoint);
    if (response?.status === 200) {
      setAllArtist(response?.data?.data);
    }
  };
  useEffect(() => {
    fetchallArtist();
  }, []);
  return (
    <>
      <div className="flex flex-col justify-start items-start gap-4 w-[100%]">
        <ArtistHeader handleDrawerOpen={handleDrawerOpen} />
        <ArtistTable
          artistData={allArtist}
          loading={isLoading}
          fetchArtist={fetchallArtist}
          handleModalOpen={handleModalOpen}
        />
      </div>
      <AddArtistDrawer
        handleDrawerOpen={handleDrawerOpen}
        drawerOpen={drawerOpen}
        fetchArtist={fetchallArtist}
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
          <Text size="18px" weight="400" content="Edit the Artist" />
          <div className="flex justify-center items-center gap-4">
            <EditArtistForm
              data={editArtistData}
              fetchArtist={fetchallArtist}
              closeModal={setModalOpen}
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ArtistPage;
