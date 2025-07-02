const BASE_URL = import.meta.env.VITE_BASE_API_URL || 'https://localhost:7241/api/v1/';
export default class ApiUrl {
  public static Login : string = BASE_URL +  "Authenticate/login";
  public static ReLogin : string = BASE_URL +  "Authenticate/relogin";
  public static SignUp : string = BASE_URL +  "Authenticate/sign-up";
  public static User : string = BASE_URL +  "User";
}