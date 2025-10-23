import {CanActivateChildFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {RoleService} from '../shared/data/services/role/role.service';

export const roleGuard: CanActivateChildFn = () => {

  const router = inject(Router);
  const roleService = inject(RoleService)
  const expectedRoles = ["admin", "receptionist"];
  const userRoles = roleService.getRoles()

  const available = userRoles.every((role) => expectedRoles.includes(role));

  return available ? true : router.createUrlTree(['/login']);
};
