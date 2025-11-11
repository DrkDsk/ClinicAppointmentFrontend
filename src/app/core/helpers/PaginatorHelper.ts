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
}
