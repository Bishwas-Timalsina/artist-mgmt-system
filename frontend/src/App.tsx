import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "./config/routes";
import { DrawerContextProvider } from "./context/DrawerContext";

const App = () => {
  const Routes = useRoutes(routes);
  return <DrawerContextProvider>{Routes}</DrawerContextProvider>;
};

export default App;
