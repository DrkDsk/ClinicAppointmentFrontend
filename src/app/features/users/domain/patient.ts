import {Person} from './person';

export interface Patient {
  id: number
  weight?: string
  height?: string
  weight_measure_type?: string
  height_measure_type?: string
  person: Person
}
