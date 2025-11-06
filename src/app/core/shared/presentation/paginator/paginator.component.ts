import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Button} from 'primeng/button';

@Component({
  selector: 'app-paginator',
  imports: [
    Button
  ],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.css'
})
export class PaginatorComponent {

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

  isFirstPage(): boolean {
    return this.currentPage === 1;
  }

  isLastPage(): boolean {
    return this.currentPage === this.lastPage;
  }

  handleNextPage() {
    this.next.emit();
  }

  handePrevPage() {
    this.prev.emit();
  }

  handleLoadDoctors(page: number) {
    this.loadDoctors.emit(page);
  }
}
