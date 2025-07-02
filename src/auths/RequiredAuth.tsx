import { Navigate, useLocation } from "react-router-dom";
import { ApiService } from '@/utils/api_service';
import ApiUrl from '@/constants/ApiUrl';
import { useHandleError } from "@/hooks/useHandleError.ts";
import { AxiosError } from 'axios';
interface RequireAuthProps {
  children: JSX.Element;
}

const RequireAuth = ({ children }: RequireAuthProps) => {
  const errorHandler = useHandleError();
  const location = useLocation();
  // Kiểm tra nếu không có token thì chuyển trang login
  const accessToken = localStorage.getItem(ApiService.AccessTokenKey);
  if (!accessToken) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  try {
    const request = {};
     ApiService.post(
      ApiUrl.ReLogin,
      "",
      JSON.stringify(request)
    );
    return children;
  } catch (error: unknown) {
    errorHandler(error as AxiosError);
    // Clear token and redirect to login when relogin fails
    localStorage.removeItem(ApiService.AccessTokenKey);
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
};



export default RequireAuth;
