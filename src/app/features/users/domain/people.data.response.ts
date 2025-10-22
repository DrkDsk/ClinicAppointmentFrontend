import {Links, Meta, Person} from './appointments.data.response';

export interface PeopleDataResponse {
  data: Person[]
  links: Links
  meta: Meta
}
