import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Index from "./pages/Index";
import Landing from "./components/layout/Landing";
import DashboardLayout from "./components/layout/DashboardLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import Packages from "./pages/Packages";
import About from "./pages/About";
import TourInfo from "./pages/TourInfo";
import Login from "./pages/Login";
import DashboardHome from "./pages/dashboard/DashboardHome";
import DashboardBookings from "./pages/dashboard/DashboardBookings";
import DashboardTours from "./pages/dashboard/DashboardTours";
import DashboardAnalytics from "./pages/dashboard/DashboardAnalytics";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Landing />}>
            <Route index element={<Index />} />
            <Route path="about" element={<About />} />
            <Route path="packages" element={<Packages />} />
            <Route path="tour" element={<TourInfo />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path="dashboard" element={<DashboardLayout />}>
              <Route index element={<DashboardHome />} />
              <Route path="bookings" element={<DashboardBookings />} />
              <Route path="tours" element={<DashboardTours />} />
              <Route path="analytics" element={<DashboardAnalytics />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
