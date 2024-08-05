import { Route, Routes, Navigate } from "react-router-dom";

import HomePage from "../pages/HomePage/HomePage";
import FavoritesPage from "../pages/FavoritesPage/FavoritesPage";
import TeachersPage from "../pages/TeachersPage/TeachersPage";
import { Layout } from "./Layout";

import PrivateRoute from "./PrivateRoute/PrivateRoute";

function App() {
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
}

export default App;
