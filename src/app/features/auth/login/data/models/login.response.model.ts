import {Role} from '../../../../../core/shared/domain/entities/roles';

export interface LoginResponseModel {
  token: string,
  roles: Role[]
}
