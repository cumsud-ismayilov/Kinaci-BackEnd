import { Navigate, Outlet } from "react-router-dom";
import {jwtDecode} from "jwt-decode";

export default function AdminProtectedRoute() {
  const token = localStorage.getItem("admin_token");

  // Token yoxdursa — login-ə yönləndir
  if (!token) return <Navigate to="/admin/login" replace />;

  try {
    const decoded = jwtDecode(token);

    // Admin olmayanları blokla
    if (decoded.role !== "admin") {
      localStorage.removeItem("admin_token");
      return <Navigate to="/admin/login" replace />;
    }

    // Token düzgün və admin — admin panelə icazə ver
    return <Outlet />;
  } catch (err) {
    // Corrupted / expired token
    return <Navigate to="/admin/login" replace />;
  }
}
