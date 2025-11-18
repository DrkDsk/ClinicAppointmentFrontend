import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private roles: string[] = [];

  public setRoles(roles: string[]) {
    this.roles = roles;
    const roleString = JSON.stringify(roles);

    sessionStorage.setItem('roles', roleString);
  }

  public getRoles(): string[] {
    return this.roles.length ? this.roles : JSON.parse(sessionStorage.getItem('roles') ?? '[]');
  }
}
