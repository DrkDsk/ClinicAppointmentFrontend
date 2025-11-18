import {CanActivateChildFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {RoleService} from '../shared/data/services/role/role.service';
import {AppPaths} from '../constants/path.constants';
import {PATIENT_ROLE, SYSTEM_ROLES} from '../constants/role.constants';

export const roleGuard: CanActivateChildFn = (_childRoute, _state) => {

  const router = inject(Router);
  const roleService = inject(RoleService)
  const expectedRoles = [...SYSTEM_ROLES, PATIENT_ROLE];
  const userRoles = roleService.getRoles()

  const available = userRoles.every((role) => expectedRoles.includes(role));

  return available ? true : router.createUrlTree([`/${AppPaths.login}`]);
};
