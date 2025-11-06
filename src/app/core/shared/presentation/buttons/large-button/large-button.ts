import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-large-button',
  imports: [],
  templateUrl: './large-button.html',
  styleUrl: './large-button.css'
})
export class LargeButton {
  @Input() onClick: (() => void) | undefined;
  @Input() public title: string = "Crear";

  callToAction() {
    if (this.onClick) {
      this.onClick();
    }
  }
}
