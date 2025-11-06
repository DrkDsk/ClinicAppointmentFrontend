import {Component, Input} from '@angular/core';

export interface TableColumn<T = any> {
  header: string;
  field?: keyof T | string;
  cell?: (row: T) => string;
}

@Component({
  selector: 'app-table',
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent<T> {

  @Input({required: true}) list: T[] = [];
  @Input({required: true}) columns: TableColumn<T>[] = [];

  getCellValue(row: any, col: any): any {
    if (col.cell) return col.cell(row);
    if (col.field) return this.getFieldValue(row, col.field);
    return '';
  }

  private getFieldValue(row: any, field: string): any {
    return field.split('.').reduce((value, key) => value?.[key], row);
  }
}
