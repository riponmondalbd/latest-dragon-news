import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const PrivateRoutes = ({ children }) => {
  const { loader, user } = useContext(AuthContext);
  const location = useLocation();

  if (loader) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-ring loading-md "></span>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to={"/login"} />;
};

export default PrivateRoutes;
