import { useState } from "react";
import axios from "axios";
import { CONSTANTS } from "../constants/Constants";

const useFetchUserInfo = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const fetchData = async (endPoint: string, accessToken: any) => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${CONSTANTS.BASE_URL}/${endPoint}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response;
    } catch (error: any) {
      setError(error);
      setIsLoading(false);
    }
  };

  return { isLoading, error, fetchData };
};

export default useFetchUserInfo;
