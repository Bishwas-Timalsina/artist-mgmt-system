import axios from "axios";
import { useState } from "react";
import { CONSTANTS } from "../constants/Constants";

const useUpdateContent = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);
  const accessToken = localStorage?.getItem("accessToken");
  const updateData = async (endPoint: string, data: any) => {
    try {
      setIsLoading(true);
      const response = await axios.patch(
        `${CONSTANTS.BASE_URL}/${endPoint}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      return response;
    } catch (e: any) {
      setIsLoading(false);
      setError(e.message);
      return error;
    }
  };
  return { isLoading, error, updateData };
};
export default useUpdateContent;
