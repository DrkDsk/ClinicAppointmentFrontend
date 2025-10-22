import { Role } from "./roles"
import {Person} from '../../../users/domain/appointments.data.response';

export interface User {
    id: string
    person: Person,
    roles: [Role]
}
