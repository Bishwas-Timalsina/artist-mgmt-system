import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SongHeader from "./component/SongHeader";
import { DrawerContext } from "../../context/DrawerContext";
import SongTable from "./component/SongTable";
import AddSongDrawer from "./component/AddSongDrawer";
import useFetchContent from "../../hooks/useFetchData";

const SongPage = () => {
  const { id } = useParams();
  const [allSong, setAllSong] = useState<any>(null);
  const { drawerOpen, handleDrawer } = useContext(DrawerContext);
  const handleDrawerOpen = () => {
    handleDrawer();
  };
  const { isLoading, getData } = useFetchContent();

  const fetchAllSong = async () => {
    const endPoint = 'music';
    const response = await getData(endPoint,id);
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
        <SongTable />
      </div>
      <AddSongDrawer
        handleDrawerOpen={handleDrawerOpen}
        drawerOpen={drawerOpen}
        fetchSong={fetchAllSong}
      />
    </>
  );
};

export default SongPage;
