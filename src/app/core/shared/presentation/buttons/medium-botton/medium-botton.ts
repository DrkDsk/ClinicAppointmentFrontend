import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-medium-botton',
  imports: [
    NgClass
  ],
  templateUrl: './medium-botton.html',
  styleUrl: './medium-botton.css'
})
export class MediumBotton {

  @Input() onClick: (() => void) | undefined;
  @Input() public title: string = "Crear";
  @Input() public disabled: boolean = false;

  callToAction() {
    if (this.onClick) {
      this.onClick();
    }
  }
}
