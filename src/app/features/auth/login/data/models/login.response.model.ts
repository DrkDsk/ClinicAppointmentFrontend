import {User} from '../../../../dashboard/domain/entities/user';

export interface LoginResponseDataModel {
  token: string,
  user: User
}

export interface LoginResponseModel {
  data: LoginResponseDataModel,
  message: string
}
