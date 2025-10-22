import {Link} from "./Link"

export interface PaginatorMeta {
  current_page: number;
  last_page: number;
  links: Link[];
}
