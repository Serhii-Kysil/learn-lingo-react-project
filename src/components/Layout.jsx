import { Toaster } from "react-hot-toast";
import { AppBar } from "./AppBar/AppBar";

export const Layout = () => {
  return (
    <div>
      <AppBar />
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};
