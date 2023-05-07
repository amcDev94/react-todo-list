import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import NotFoundPage from "./pages/404/NotFoundPage";
import LoginPage from "./pages/auth/LoginPage";
import DashBoard from "./pages/dashboard/DashBoard";

function AppRoutingFinal() {
  let loggedIn = true;

  return (
    <Router>
      <Routes>
        {/* Redirecciones to protect our routes */}
        <Route
          path="/"
          element={
            loggedIn ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        {/* {loggedIn ? (<Route path="/" element={<Navigate to="/dashboard" replace />}) : (<Route path="/" element={<Navigate to="/login" replace />})} */}

        {/* Login Route */}
        <Route path="/login" element={<LoginPage />} />

        {/* Dashboard Route */}
        <Route
          path="/dashboard"
          element={loggedIn ? <DashBoard /> : <Navigate to="/login" replace />}
        />
        {/* Not found page - 404 */}
        <Route path="*" Component={NotFoundPage} />
      </Routes>
    </Router>
  );
}

export default AppRoutingFinal;
