import { RouterProvider } from "react-router-dom";
import { routers } from "./routes";
import { FavoriteProvider } from "./context/favoriteContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BackToTopMotion } from "./components/backToTopMotion/backToTopMotion";
import Loader from "./components/loader";
import { useEffect, useState } from "react";


function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500); // 2.5 saniyə animasiya
    return () => clearTimeout(timer);
  }, []);
  return (
    <FavoriteProvider>
      {loading ? (
        <Loader />
      ) : (
        <>
          <RouterProvider router={routers} />
          <ToastContainer position="top-right" autoClose={2000} />
          <BackToTopMotion />
        </>
      )}
    </FavoriteProvider>
  );
}

export default App;
