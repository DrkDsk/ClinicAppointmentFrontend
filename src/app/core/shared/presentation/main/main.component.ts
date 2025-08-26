import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgClass } from '@angular/common';
import { DrawerComponent } from '../drawer/drawer.component';

@Component({
  selector: 'app-main.component',
  imports: [RouterOutlet, DrawerComponent, NgClass],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  drawerVisible = false;

  openDrawer() {
    this.drawerVisible = true;
  }

  onAttach(e: any) {
    this.drawerVisible = false;
  }
}
