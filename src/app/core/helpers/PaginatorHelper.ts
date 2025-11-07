import {PaginatorMeta} from '../shared/domain/entities/meta';

export class PaginatorHelper {

  static getVisiblePages(currentPage: number, totalPages: number, maxVisible: number = 8): number[] {
    const half = Math.floor(maxVisible / 2);

    let start = Math.max(currentPage - half, 1);
    let end = start + maxVisible - 1;

    if (end > totalPages) {
      end = totalPages;
      start = Math.max(end - maxVisible + 1, 1);
    }

    return Array.from({length: end - start + 1}, (_, i) => start + i);
  }

  static mapResponseToMeta(responseMeta: any): PaginatorMeta {
    const current = responseMeta?.current_page ?? 1;
    const last = responseMeta?.last_page ?? 0;

    return {
      from: responseMeta?.from ?? 0,
      to: responseMeta?.to ?? 0,
      current_page: current,
      last_page: last,
      total: responseMeta?.total ?? 0,
      per_page: responseMeta?.per_page ?? 0,
      pages: PaginatorHelper.getVisiblePages(current, last)
    };
  }
}
