import {User} from "./user";

export interface UserDataResponseModel {
  data: User | null | undefined;
  message: string | null | undefined;
}
