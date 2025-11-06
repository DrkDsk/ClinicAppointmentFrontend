import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PaginatorComponent} from '../paginator/paginator.component';

export interface TableColumn<T = any> {
  header: string;
  field?: keyof T | string;
  cell?: (row: T) => string;
}

@Component({
  selector: 'app-table',
  imports: [
    PaginatorComponent
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent<T> {

  @Input() enablePagination: boolean = true;
  @Input({required: true}) list: T[] = [];
  @Input({required: true}) columns: TableColumn<T>[] = [];

  @Output() goFirstPage = new EventEmitter<void>();
  @Output() prev = new EventEmitter<void>();
  @Output() next = new EventEmitter<void>();
  @Output() loadDoctors = new EventEmitter<number>();

  @Input({required: true}) public from: number = 0;
  @Input({required: true}) public to: number = 0;
  @Input({required: true}) public currentPage: number = 0;
  @Input({required: true}) public lastPage: number = 0;
  @Input({required: true}) public totalRecords: number = 0;
  @Input({required: true}) public listOfPages: number[] = [];

  handleGoFirstPage() {
    this.goFirstPage.emit();
  }

  handleNextPage() {
    this.next.emit();
  }

  handlePrevPage() {
    this.prev.emit();
  }

  handleLoadDoctors(page: number) {
    this.loadDoctors.emit(page);
  }

  getCellValue(row: any, col: any): any {
    if (col.cell) return col.cell(row);
    if (col.field) return this.getFieldValue(row, col.field);
    return '';
  }

  private getFieldValue(row: any, field: string): any {
    return field.split('.').reduce((value, key) => value?.[key], row);
  }
}
