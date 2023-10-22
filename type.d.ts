export interface iUser {
  id: number;
  name: string;
  email: string;
  post: [];
  profile: [];
}

export interface iUserAuthorization extends iUser {
  isLoggedIn: boolean;
}
