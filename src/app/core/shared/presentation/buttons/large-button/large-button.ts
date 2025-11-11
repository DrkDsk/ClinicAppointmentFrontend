import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-large-button',
  imports: [],
  templateUrl: './large-button.html',
  styleUrl: './large-button.css'
})
export class LargeButton {

  @Output() onClick = new EventEmitter<void>();
  @Input() public title: string = "Crear";

  handleClick() {
    this.onClick.emit();
  }
}
