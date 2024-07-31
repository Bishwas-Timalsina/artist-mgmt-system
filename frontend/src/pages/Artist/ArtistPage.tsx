import{ useContext, useEffect, useState } from "react";
import { DrawerContext } from "../../context/DrawerContext";
import useFetchContent from "../../hooks/useFetchData";
import ArtistHeader from "./component/ArtistHeader";
import ArtistTable from "./component/ArtistTable";

const ArtistPage = () => {
  const [allArtist, setAllArtist] = useState<any>([]);
  const { isLoading, getData } = useFetchContent();
  const { drawerOpen, handleDrawer } = useContext(DrawerContext);
  const handleDrawerOpen = () => {
    handleDrawer();
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
          handleDrawerOpen={handleDrawerOpen}
        />
      </div>
      {/* <AddArtistDrawer /> */}
    </>
  );
};

export default ArtistPage;
