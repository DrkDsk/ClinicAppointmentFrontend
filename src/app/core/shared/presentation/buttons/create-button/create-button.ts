import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-create-button',
  imports: [],
  templateUrl: './create-button.html',
  styleUrl: './create-button.css'
})
export class CreateButton {
  @Input() onClick: (() => void) | undefined;
  @Input() public title: string = "Crear";

  callToAction() {
    if (this.onClick) {
      this.onClick();
    }
  }
}
