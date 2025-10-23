import {Person} from '../../domain/person';
import {Links} from '../../../../core/shared/domain/entities/links';
import {Meta} from '../../../../core/shared/domain/entities/meta';

export interface PeopleDataResponseModel {
  data: Person[]
  links: Links | null | undefined
  meta: Meta | null | undefined
}
