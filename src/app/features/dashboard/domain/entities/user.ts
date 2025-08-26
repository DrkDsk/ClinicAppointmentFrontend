import { Person } from "./person"
import { Role } from "./roles"

export interface User {
    id: string
    person: Person,
    roles: [Role]
}