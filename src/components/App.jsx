import { Route, Routes, Navigate } from "react-router-dom";
import { lazy } from "react";

import Layout from "./Layout";

import PrivateRoute from "./PrivateRoute/PrivateRoute";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const TeachersPage = lazy(() => import("../pages/TeachersPage/TeachersPage"));
const FavoritesPage = lazy(() =>
  import("../pages/FavoritesPage/FavoritesPage")
);

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/teachers" element={<TeachersPage />} />
          <Route
            path="/favorites"
            element={
              <PrivateRoute>
                <FavoritesPage />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
