import {Doctor} from '../../../domain/doctor';
import {Links} from '../../../../../core/shared/domain/entities/links';
import {Meta} from '../../../../../core/shared/domain/entities/meta';

export interface DoctorsResponseModel {
  data: Doctor[]
  links: Links | null | undefined
  meta: Meta | null | undefined
}
