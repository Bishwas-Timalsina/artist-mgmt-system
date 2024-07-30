import React from "react";
import { Outlet } from "react-router-dom";
import Text from "../components/Atomic/Text";


const IndexLayout = () => {
  return (
    <>
      <div className="grid grid-cols-12 justify-start items-center">
        <div className="col-span-6">
          <div className="bgImage"></div>
        </div>
        <div className="col-span-6 flex flex-col justify-center items-center gap-12 h-[100%]">
          <Text size="42px" weight="500" content="Artist Management System" />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default IndexLayout;
