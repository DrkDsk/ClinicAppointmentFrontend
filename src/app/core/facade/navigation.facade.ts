import {Injectable} from "@angular/core";
import {Router} from "@angular/router";

@Injectable({providedIn: 'root'})
export class NavigationFacade {
  constructor(private router: Router) {
  }

  navigate(path: string) {
    this.router.navigate([`/${path}`]).then(_r => {
    })
  }
}
