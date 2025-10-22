export interface AppointmentDataResponse {
  data: AppointmentData[]
  links: Links
  meta: Meta
}

export interface AppointmentData {
  id: number
  scheduled_at: string
  doctor: Doctor
  patient: Patient
  typeAppointment: TypeAppointment
}

export interface Doctor {
  id: number
  specialty: string
  person: Person
}

export interface Person {
  id: number
  name: string
  email: string
  birthday: string
  phone: string
}

export interface Patient {
  id: number
  weight?: string
  height?: string
  weight_measure_type?: string
  height_measure_type?: string
  person: Person
}

export interface TypeAppointment {
  name: string
  description: string
}

export interface Links {
  first: string
  last: string
  prev: any
  next: string
}

export interface Meta {
  current_page: number
  from: number
  last_page: number
  links: Link[]
  path: string
  per_page: number
  to: number
  total: number
}

export interface Link {
  url?: string
  label: string
  page?: number
  active: boolean
}

