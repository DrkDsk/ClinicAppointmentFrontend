import { Component } from '@angular/core';
import { HeaderComponent } from "../components/header-component/header-component";
import { SolutionsComponent } from "../components/solutions-component/solutions-component";
import { CarouselComponent } from "../components/carousel-component/carousel-component";

@Component({
  selector: 'app-home-component',
  imports: [HeaderComponent, SolutionsComponent, CarouselComponent],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css'
})
export class HomeComponent {

  drawerVisible = false;

  openDrawer() {
    this.drawerVisible = true;
  }

  onAttach(e: any) {
    this.drawerVisible = false;
  }

}
