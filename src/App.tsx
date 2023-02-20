import Loading from "components/common/Loading";
import Layout from "components/Layout/Layout";
import NoMatch from "components/NoMatch";
import Home from "pages/Home/Home";
import Register from "pages/Register/Register";
import UserInfo from "pages/UserInfo/UserInfo";
import * as React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Navigate to="/ReqRes-users" replace />} />
        <Route
          path="/ReqRes-users"
          element={<Navigate to="/ReqRes-users/register" replace />}
        />
        <Route
          path="/ReqRes-users/register"
          element={
            // <React.Suspense fallback={<Loading />}>
            <Register />
            // </React.Suspense>
          }
        />
        <Route
          path="/ReqRes-users/users"
          element={
            // <React.Suspense fallback={<Loading />}>
            <Home />
            // </React.Suspense>
          }
        />
        <Route
          path="/ReqRes-users/users/:id"
          element={
            // <React.Suspense fallback={<Loading />}>
            <UserInfo />
            // </React.Suspense>
          }
        />
        <Route
          path="*"
          element={
            // <React.Suspense fallback={<Loading />}>
            <NoMatch />
            // </React.Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
