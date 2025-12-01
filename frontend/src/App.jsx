import "./App.css";
import { Routes, Route, useLocation,  } from "react-router-dom";
import Hero from "./pages/Hero.jsx";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import Activities from "./pages/Activities/Activities";
import ShowActivityPg from "./pages/Activities/ShowActivityPg";
import Settings from "./pages/Settings/Settings";
import AboutUsPg from "./pages/Settings/AboutUsPg";
import EarningOverviewPg from "./pages/Settings/EarningOverviewPg";
import PrivacyPg from "./pages/Settings/PrivacyPg";
import StarfallStore from "./pages/StarfallStore/StarfallStore";
import CartPg from "./pages/StarfallStore/CartPg";
import Surveys from "./pages/Surveys/Surveys";
import SurveysFormPg from "./pages/Surveys/SurveysFormPg";
import Navbar from "./components/Navbar";
import { ModuleProvider } from "./context/moduleContext.jsx";

function App() {
  const location = useLocation();
  const hideNavbarRoutes = ["/", "/login"];

  const showNavbar = !hideNavbarRoutes.includes(location.pathname);
  return (
    <>
      {showNavbar && <Navbar />}
      <ModuleProvider>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/showactivitypg" element={<ShowActivityPg />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/aboutuspg" element={<AboutUsPg />} />
        <Route path="/earningoverviewpg" element={<EarningOverviewPg />} />
        <Route path="/privacypg" element={<PrivacyPg />} />
        <Route path="/starfallstore" element={<StarfallStore />} />
        <Route path="/cartpg" element={<CartPg />} />
        <Route path="/surveys" element={<Surveys />} />
        <Route path="/surveysformpg" element={<SurveysFormPg />} />
      </Routes>
      </ModuleProvider>
    </>
  );
}

export default App;
