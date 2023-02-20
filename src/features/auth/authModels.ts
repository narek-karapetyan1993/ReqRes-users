export interface IAuthData {
  username?: string;
  email?: string;
  password?: string;
}

export interface IAuthResponse {
  id?: string;
  token?: string;
  error?: string;
}

export const meDataInit = localStorage.getItem("meData")
  ? JSON.parse(localStorage.meData)
  : {
      username: "",
      email: "",
      password: "",
    };

export const tokenInit = localStorage.getItem("meToken")
  ? JSON.parse(localStorage.meToken)
  : {
      id: "",
      token: "",
      error: "",
    };

export interface IAuthState {
  meData: IAuthData;
  token: IAuthResponse;
  status: "idle" | "loading" | "succeeded" | "failed";
}
