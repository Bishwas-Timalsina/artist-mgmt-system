import { useEffect } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import Topbar from "../components/Topbar/Topbar";
import useFetchUserInfo from "../hooks/useFetchUserInfo";

const AppLayout = () => {
  const accessToken: string = localStorage.getItem("accessToken") as string;
  const { fetchData } = useFetchUserInfo();

  const getData = async (accessToken: string) => {
    const endPoint = "user";
    const response: any = await fetchData(endPoint, accessToken);
    if (response?.status === 200) {
      const userInfo = [
        {
          id: response?.data?.data?.id,
          email: response?.data?.data?.email,
          fullName:
            response?.data?.data?.first_name +
            " " +
            response?.data?.data?.last_name,
        },
      ];
      localStorage.setItem("userinfo", JSON.stringify(userInfo));
    }
  };
  useEffect(() => {
    getData(accessToken);
  }, []);
  return (
    <>
      <div className="flex flex-row justify-start items-center h-[100vh]">
        <div className="w-[10%] h-[100%]">
          <Sidebar />
        </div>
        <div className="w-[90%] flex flex-col justify-start items-start h-[100%]">
          <Topbar />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AppLayout;
