import {NgStyle} from '@angular/common';
import {Component} from '@angular/core';
import {AppPaths} from '../../../../../core/constants/path.constants';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-header-component',
  imports: [NgStyle, RouterLink],
  templateUrl: './header-component.html',
  styleUrl: './header-component.css'
})
export class HeaderComponent {

  photoAsset = "assets/images/home_bg.jpg"
  brandingAsset = "assets/images/branding.png"

  protected readonly AppPaths = AppPaths;
}
