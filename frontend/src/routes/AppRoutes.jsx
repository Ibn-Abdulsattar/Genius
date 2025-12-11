import { Routes, Route } from "react-router-dom";
import Hero from "../pages/Hero.jsx";
import LoginPage from "../pages/LoginPage";
import Dashboard from "../pages/Dashboard/Dashboard";
import Activities from "../pages/Activities/Activities";
import ShowActivityPg from "../pages/Activities/ShowActivityPg";
import Settings from "../pages/Settings/Settings";
import AboutUsPg from "../pages/Settings/AboutUsPg";
import EarningOverviewPg from "../pages/Settings/EarningOverviewPg";
import PrivacyPg from "../pages/Settings/PrivacyPg";
import StarfallStore from "../pages/StarfallStore/StarfallStore";
import CartPg from "../pages/StarfallStore/CartPg";
import Surveys from "../pages/Surveys/Surveys";
import SurveysFormPg from "../pages/Surveys/SurveysFormPg";
import MainLayout from "../layout/MainLayout.jsx";
import AuthLayout from "../layout/AuthLayout.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
     
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<LoginPage />} />
     

      {/* Layout with Navbar */}
      <Route element={<MainLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/showactivitypg" element={<ShowActivityPg />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="aboutuspg" element={<AboutUsPg />} />
        <Route path="earningoverviewpg" element={<EarningOverviewPg />} />
        <Route path="privacypg" element={<PrivacyPg />} />
        <Route path="/starfallstore" element={<StarfallStore />} />
        <Route path="/cartpg" element={<CartPg />} />
        <Route path="/surveys" element={<Surveys />} />
        <Route path="/surveysformpg" element={<SurveysFormPg />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
