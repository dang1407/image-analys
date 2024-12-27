import { useState } from "react"
import { Button } from "./components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./components/ui/card"
import { Input } from "./components/ui/input"
import { PasswordInput } from "./components/ui/password"
import { Label } from "@radix-ui/react-label"
import { useNavigate } from "react-router-dom";
class LoginData {
  public UserName?: string;
  public Password?: string;
}

export default function Login() {
  const [loginData, setLoginData] = useState<LoginData>({});
  const navigate = useNavigate();
  const loginHandler = async () => {
    if(loginData.UserName == 'minhthuong123' && loginData.Password == '12345678'){
      navigate("/");
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
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  placeholder="Username"
                  onChange={(e) =>
                    setLoginData({
                      ...loginData,
                      UserName: e.target.value,
                    })
                  }
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <PasswordInput
                  id="password"
                  placeholder="Password"
                  onChange={(e) =>
                    setLoginData({
                      ...loginData,
                      Password: e.target.value,
                    })
                  }
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
