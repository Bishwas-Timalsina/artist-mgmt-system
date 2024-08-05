import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

interface AuthContextType {
  accessToken: string | null;
  setAccessToken: (token: string | null) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [accessToken, setAccessToken] = useState<any>(
    localStorage?.getItem("accessToken") || null
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
      logout,
    }),
    [accessToken]
  );
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
