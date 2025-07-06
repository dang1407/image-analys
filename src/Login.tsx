import { useState } from "react"
import {Button} from "./components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./components/ui/card";
import { PasswordInput } from './components/custom/password'
import { useLocation, useNavigate } from "react-router-dom";
import { ApiService } from './utils/ApiService'
import ApiUrl from './constants/ApiUrl'
import { useHandleError } from './hooks/useHandleError'
import { AxiosError } from 'axios'
import { FieldValidator } from './components/custom/FieldValidator'
import { Input } from './components/ui/input'
import { LoadingManager } from './components/custom/Loading';
class LoginData {
  public UserName?: string;
  public Password?: string;
}

interface LoginResponseDTO {
  AccessToken?: string;
}
export default function Login() {
  const [loginData, setLoginData] = useState<LoginData>({});
  const navigate = useNavigate();
  const location = useLocation();
  const errorHandler = useHandleError();
  const loginHandler = async () => {
    try {
      if(FieldValidator.HasError()){
        throw new Error("Lỗi")
      }
      LoadingManager.showLoading();
      const response = await ApiService.post<LoginResponseDTO>(ApiUrl.Login, "", JSON.stringify(loginData));
      localStorage.setItem(ApiService.AccessTokenKey, response.AccessToken ?? "");
      if (location?.state?.from) {
        navigate(location.state.from);
      } else navigate("/");
    } catch (error) {
      errorHandler(error as AxiosError);
    } finally {
      LoadingManager.hideLoading();
    }
  }
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          {/* <CardDescription>Deploy your new project in one-click.</CardDescription> */}
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                {/* <Label htmlFor="username">Username</Label> */}
                <Input
                  title='Username'
                  inputValue={loginData.UserName}
                  required
                  id="username"
                  placeholder="Username"
                  onEnter={() => loginHandler()}
                  onChange={(e) =>
                    setLoginData({
                      ...loginData,
                      UserName: e.target.value,
                    })
                  }
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                {/* <Label className='required' htmlFor="password">Password</Label> */}
                <PasswordInput
                  title='Password'
                  id="password"
                  required
                  placeholder="Password"
                  inputValue={loginData.Password}
                  onChange={(e) =>
                    setLoginData({
                      ...loginData,
                      Password: e.target.value,
                    })
                  }
                  onEnter={() => loginHandler()} 
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button onClick={() => loginHandler()}>Login</Button>
          <Button variant="outline">Already have an account.</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
