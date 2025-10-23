import {Role} from "../../../../core/shared/domain/entities/roles"
import {Person} from '../../../users/domain/person';

export interface User {
  id: string
  person: Person,
  roles: [Role]
}
