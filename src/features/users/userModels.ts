export interface IUser {
  id: number;
  email: "string";
  first_name: "string";
  last_name: "string";
  avatar: "string";
  liked?: boolean;
}

export interface IUsersData {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: IUser[];
  support: {
    text: string;
    url: string;
  };
}

export const usersInitState = localStorage.getItem("usersData")
  ? JSON.parse(localStorage.usersData)
  : {
      page: 0,
      per_page: 0,
      total: 0,
      total_pages: 0,
      data: [],
      support: {
        text: "",
        url: "",
      },
    };

export interface IUsersState {
  users: IUsersData;
  status: "idle" | "loading" | "succeeded" | "failed";
}
