import {Role} from "../../../../core/shared/domain/entities/roles"
import {Profile} from '../../../users/profile/domain/entities/profile';

export interface User {
  id: string
  person: Profile,
  roles: [Role]
}
