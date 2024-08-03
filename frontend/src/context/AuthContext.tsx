import { createContext, useContext, useEffect, useMemo, useState } from "react";

export const AuthContext = createContext<any>(undefined);

export const AuthProvider = ({ children }: any) => {
  const [accessToken, setAccessToken] = useState<any>(
    localStorage?.getItem("accessToken")
  );

  useEffect(() => {
    if (accessToken) {
      localStorage?.setItem("accessToken", accessToken);
    } else {
      localStorage?.removeItem("accessToken");
    }
  }, [accessToken]);
  const logout = () => {
    setAccessToken(null);
  };

  const contextValue = useMemo(
    () => ({
      accessToken,
      setAccessToken,
      logout
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
