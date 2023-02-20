import Loading from "components/common/Loading";
import Layout from "components/Layout/Layout";
import * as React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const Register = React.lazy(() => import("pages/Register/Register"));
const Home = React.lazy(() => import("pages/Home/Home"));
const UserInfo = React.lazy(() => import("pages/UserInfo/UserInfo"));
const NoMatch = React.lazy(() => import("components/NoMatch"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Navigate to="/ReqRes-users" replace />} />
        <Route
          path="/ReqRes-users/"
          element={<Navigate to="/ReqRes-users/register" replace />}
        />
        <Route
          path="/ReqRes-users/register"
          element={
            <React.Suspense fallback={<Loading />}>
              <Register />
            </React.Suspense>
          }
        />
        <Route
          path="/ReqRes-users/users"
          element={
            <React.Suspense fallback={<Loading />}>
              <Home />
            </React.Suspense>
          }
        />
        <Route
          path="/ReqRes-users/users/:id"
          element={
            <React.Suspense fallback={<Loading />}>
              <UserInfo />
            </React.Suspense>
          }
        />
        <Route
          path="*"
          element={
            <React.Suspense fallback={<Loading />}>
              <NoMatch />
            </React.Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
