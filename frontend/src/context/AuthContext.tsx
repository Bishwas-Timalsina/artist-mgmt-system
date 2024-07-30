import { createContext, useContext, useEffect, useMemo, useState } from "react";

export const AuthContext = createContext<any>(undefined);

export const AuthProvider = ({ children }: any) => {
  const [accessToken, setAccessTokem] = useState<any>(
    localStorage?.getItem("accessToken")
  );

  useEffect(() => {
    if (accessToken) {
      localStorage?.setItem("accessToken", accessToken);
    } else {
      localStorage?.removeItem("accessToken");
    }
  }, [accessToken]);

  const contextValue = useMemo(
    () => ({
      accessToken,
      setAccessTokem,
    }),
    [accessToken]
  );
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
export const useAuth = () => {
  return useContext(AuthContext);
};
