import axios from "axios";
import { useState } from "react";
import { CONSTANTS } from "../constants/Constants";

const useDeleteContent = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const accessToken = localStorage?.getItem("accessToken");

  const deleteContent = async (endPoint: any) => {
    try {
      setIsLoading(true);
      const response = await axios?.delete(
        `${CONSTANTS?.BASE_URL}/${endPoint}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      setIsLoading(false);
      return response;
    } catch (e: any) {
      setIsLoading(false);
      setError(e);
      return e.message;
    }
  };

  return { isLoading, error, deleteContent };
};
export default useDeleteContent;
