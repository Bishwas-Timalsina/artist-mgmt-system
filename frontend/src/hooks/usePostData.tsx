import axios from "axios";
import { useState } from "react";
import { CONSTANTS } from "../constants/Constants";

const usePostData = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const postData = async (endPoint: string, data: any) => {
    try {
      setIsLoading(true);
      const response = await axios.post(
        `${CONSTANTS.BASE_URL}/${endPoint}`,
        data
      );
      return response;
    } catch (e: any) {
      setIsLoading(false);
      setError(e.message);
      return error;
    }
  };
  return { isLoading, error, postData };
};
export default usePostData;
