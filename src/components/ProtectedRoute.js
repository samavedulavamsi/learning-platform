import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, adminOnly }) {

  const user =
    JSON.parse(localStorage.getItem("user"));

  // If no user logged in
  if (!user) {
    return <Navigate to="/login" />;
  }

  // If admin page but user is not admin
  if (adminOnly && user.role !== "admin") {
    return <Navigate to="/" />;
  }

  return children;
}

export default ProtectedRoute;