import "./App.css";
import { useLocation,  } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ModuleProvider } from "./context/moduleContext.jsx";
import AppRoutes from "./routes/AppRoutes.jsx";

function App() {
  const location = useLocation();
  const hideNavbarRoutes = ["/", "/login"];

  const showNavbar = !hideNavbarRoutes.includes(location.pathname);
  return (
    <>
      {showNavbar && <Navbar />}
      <ModuleProvider>
        <AppRoutes/>
      </ModuleProvider>
    </>
  );
}

export default App;
