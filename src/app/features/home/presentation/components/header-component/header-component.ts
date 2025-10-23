import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header-component',
  imports: [NgStyle],
  templateUrl: './header-component.html',
  styleUrl: './header-component.css'
})
export class HeaderComponent {

  photoAsset = "assets/images/home_bg.jpg"
  brandingAsset = "assets/images/branding.png"

}
