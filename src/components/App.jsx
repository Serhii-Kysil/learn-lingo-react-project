import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";

import HomePage from "../pages/HomePage/HomePage";
import FavoritesPage from "../pages/FavoritesPage/FavoritesPage";
import TeachersPage from "../pages/TeachersPage/TeachersPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/teachers" element={<TeachersPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
