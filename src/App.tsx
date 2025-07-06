import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import UploadImage from "./pages/images-analys";
import Layout from "./Layout";
import Home from "./pages/homes";
import RequireAuth from './auths/RequiredAuth';
// Component kiểm tra đăng nhập
// const RequireAuth: React.FC<{ children: JSX.Element }> = ({ children }) => {
//   const isAuthenticated = Boolean(localStorage.getItem("authToken")); // Hoặc logic kiểm tra trạng thái đăng nhập
//   return isAuthenticated ? children : <Navigate to="/" />;
// };

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<RequireAuth><Layout /></RequireAuth>}>
        <Route index element={<Home />} />
        <Route path="images-analys" element={<UploadImage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
