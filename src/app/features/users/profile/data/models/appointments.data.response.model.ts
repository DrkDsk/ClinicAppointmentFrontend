import {Links} from '../../../../../core/shared/domain/entities/links';
import {Appointment} from '../../../domain/appointment';
import {Meta} from '../../../../../core/shared/domain/entities/meta';

export interface AppointmentDataResponseModel {
  data: Appointment[]
  links: Links
  meta: Meta
}

