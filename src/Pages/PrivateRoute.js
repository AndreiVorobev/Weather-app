import { useLocation, Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const location = useLocation();
  const auth = sessionStorage.getItem("Auth Token");
  if (!auth) {
    return <Navigate to="/loginpage" state={{ from: location }} />;
  }
  return children;
}
