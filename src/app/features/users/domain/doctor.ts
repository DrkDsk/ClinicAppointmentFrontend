import {Profile} from '../profile/domain/entities/profile';

export interface Doctor {
  id: number
  specialty: string
  person: Profile
}
