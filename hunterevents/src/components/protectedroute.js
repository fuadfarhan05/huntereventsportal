import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children, requiresAdmin }) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/signin" replace />;
  }

  // Example: assume admin flag is stored in user.isAdmin
  if (requiresAdmin && !user.isAdmin) {
    return <Navigate to="/home" replace />;
  }

  return children;
}
