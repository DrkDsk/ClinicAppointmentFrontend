import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DrawerComponent } from "./shared/drawer/drawer.component";
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DrawerComponent, NgClass],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  drawerVisible = false;
  protected readonly title = signal('clinic_appointments_app');

  openDrawer() {
    this.drawerVisible = true;
  }
}
