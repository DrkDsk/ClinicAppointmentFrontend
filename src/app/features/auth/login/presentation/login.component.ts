import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {InputGroupModule} from 'primeng/inputgroup';
import {InputGroupAddonModule} from 'primeng/inputgroupaddon';
import {InputTextModule} from 'primeng/inputtext';
import {SelectModule} from 'primeng/select';
import {InputNumberModule} from 'primeng/inputnumber';
import {PasswordModule} from 'primeng/password';
import {TokenService} from '../../../../core/shared/data/services/token/token.service';
import {NavigationFacade} from '../../../../core/facade/navigation.facade';
import {LoginCredentials} from '../domain/entities/credential';
import {AuthRepositoryImpl} from '../data/repositories/auth.repository.impl';
import {AuthRepository} from '../domain/repositories/auth.repository';
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
    NgClass
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

  private loginRepository: AuthRepository = inject(AuthRepositoryImpl)
  private tokenService: TokenService = inject(TokenService)
  private roleService: RoleService = inject(RoleService)
  private navigationFacade: NavigationFacade = inject(NavigationFacade)

  photo = "assets/images/bg1.jpg";
  errorMessage: string | undefined | null = null

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
        let data = response.data;
        let profile = data.user;

        let token = data.token;
        this.errorMessage = null;
        this.navigationFacade.navigate(AppPaths.dashboard)
        this.tokenService.setToken(token);
        const roles = profile.roles.map(role => role.name);
        this.roleService.setRoles(roles)
      },
      error: (data) => {
        let response = data.error;
        this.errorMessage = response.message;
      }
    });
  }

  protected readonly AppPaths = AppPaths;
}
