import { Drawer } from "antd";
import React from "react";
import Text from "../../../components/Atomic/Text";

const AddSongDrawer = (props: any) => {
  const { drawerOpen, handleDrawerOpen, fetchSong } = props;
  return (
    <>
      <Drawer
        open={drawerOpen}
        closable
        destroyOnClose
        onClose={handleDrawerOpen}
        width={700}
        title={<Text size="18px" weight="500" content="Add Songs" />}
      >
        Add Songs
      </Drawer>
    </>
  );
};

export default AddSongDrawer;
