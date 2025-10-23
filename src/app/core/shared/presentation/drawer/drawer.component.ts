import {Component, Input, Output, EventEmitter} from '@angular/core';
import {DrawerModule} from 'primeng/drawer';
import {ButtonModule} from 'primeng/button';
import {AvatarModule} from 'primeng/avatar';
import {NgClass} from '@angular/common';
import {RouterLink, RouterOutlet} from '@angular/router';
import {Ripple} from 'primeng/ripple';

@Component({
  selector: 'app-drawer-component',
  imports: [DrawerModule, ButtonModule, AvatarModule, NgClass, RouterLink, RouterOutlet, Ripple],
  standalone: true,
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.css'
})

export class DrawerComponent {
  @Input() visible: boolean = true;
  @Output() visibleChange = new EventEmitter<boolean>();

  close() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }

  open() {
    this.visible = !this.visible;
    this.visibleChange.emit(this.visible);
  }

  onAttach(e: any) {
  }
}
