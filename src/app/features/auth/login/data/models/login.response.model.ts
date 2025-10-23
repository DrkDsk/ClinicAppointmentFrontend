import {Role} from './AuthenticationResponseModel';

export interface LoginResponseModel {
  token: string,
  roles: Role[]
}
