import {Component, Inject} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {InputGroupModule} from 'primeng/inputgroup';
import {InputGroupAddonModule} from 'primeng/inputgroupaddon';
import {InputTextModule} from 'primeng/inputtext';
import {SelectModule} from 'primeng/select';
import {InputNumberModule} from 'primeng/inputnumber';
import {PasswordModule} from 'primeng/password';
import {AuthApiServiceImpl} from '../data/services/auth.api.service.impl';
import {TokenService} from '../../../../core/shared/data/services/token/token.service';
import {NavigationFacade} from '../../../../core/facade/navigation.facade';
import {LoginCredentials} from '../domain/entities/credential';
import {AuthRepositoryImpl} from '../data/repositories/auth.repository.impl';
import {AuthRepository} from '../domain/repositories/auth.repository';
import {AUTH_API_SERVICE} from '../data/services/auth.api.service.injection.token';
import {AUTH_REPOSITORY} from '../domain/repositories/auth.repository.injection.token';
import {NgClass} from '@angular/common';
import {RoleService} from '../../../../core/shared/data/services/role/role.service';
import {AppPaths} from '../../../../core/constants/path.constants';

@Component({
  selector: 'app-login.component',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ButtonModule,
    PasswordModule,
    CardModule,
    FormsModule,
    FormsModule,
    InputGroupModule,
    InputGroupAddonModule,
    InputTextModule,
    SelectModule,
    InputNumberModule,
    NgClass,
  ],
  providers: [
    {provide: AUTH_API_SERVICE, useClass: AuthApiServiceImpl},
    {provide: AUTH_REPOSITORY, useClass: AuthRepositoryImpl}
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

  constructor(@Inject(AUTH_REPOSITORY) private loginRepository: AuthRepository,
              private tokenService: TokenService,
              private roleService: RoleService,
              private navigationFacade: NavigationFacade) {
  }

  photo = "assets/images/bg1.jpg";

  loginForm = new FormGroup({
    username: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email]
    }),

    password: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(6)]
    })
  });

  get username() {
    return this.loginForm.get('username')?.value ?? ""
  }

  get password() {
    return this.loginForm.get('password')?.value ?? ""
  }

  onSubmit() {
    const credentials: LoginCredentials = {email: this.username, password: this.password}

    const request = this.loginRepository.login(credentials)

    request.subscribe({
      next: (response) => {
        this.navigationFacade.navigate(AppPaths.dashboard)
        this.tokenService.setToken(response.token);
        const roles = response.roles.map(role => role.name);
        this.roleService.setRoles(roles)
      },
      error: (error) => console.error(error)
    });
  }
}
