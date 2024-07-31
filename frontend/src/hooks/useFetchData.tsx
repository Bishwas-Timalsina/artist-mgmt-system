import axios from "axios";
import { useState } from "react";
import { CONSTANTS } from "../constants/Constants";

const useFetchContent = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const accessToken = localStorage?.getItem("accessToken");
  const getData = async (endPoint: any) => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${CONSTANTS.BASE_URL}/${endPoint}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setIsLoading(false);
      return response;
    } catch (e: any) {
      setIsLoading(false);
      setError(e);
      return e.message;
    }
  };
  return { isLoading, error, getData };
};
export default useFetchContent;
