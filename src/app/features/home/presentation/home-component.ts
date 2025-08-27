import { Component } from '@angular/core';
import { HeaderComponent } from "../components/header-component/header-component";
import { SolutionsComponent } from "../components/solutions-component/solutions-component";

@Component({
  selector: 'app-home-component',
  imports: [HeaderComponent, SolutionsComponent],
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
