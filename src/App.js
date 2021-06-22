import React, { Suspense } from "react";
import "./App.css";
import ClickCounter from "./ClickCounter";
import DataUser from "./DataUser";
import { ErrorBoundary } from "react-error-boundary";
import FallBack from "./FallBack";
function App() {
  const About = React.lazy(() => import("./Component/About"));
  const Profile = React.lazy(() => import("./Component/Profile"));
  const data = {
    nama: "deddy prianto sihombing",
  };
  const errorHandler = (error, errorInfo) => {
    console.log("ini err kamu", error, errorInfo);
  };
  return (
    <ErrorBoundary FallbackComponent={FallBack} onError={errorHandler}>
      <DataUser data={data} />
      {/* <DataUser data={{}} /> */}
      <ClickCounter />
    </ErrorBoundary>
  );
}
export default App;
