import {Person} from './person';

export interface Doctor {
  id: number
  specialty: string
  person: Person
}
