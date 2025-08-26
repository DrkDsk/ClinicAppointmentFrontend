import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { InputNumberModule } from 'primeng/inputnumber';
import { PasswordModule } from 'primeng/password';
import { LoginApiServiceImpl } from '../data/services/login_api.service.impl';
import { TokenService } from '../../../../core/shared/data/services/token/token.service';
import { NavigationFacade } from '../../../../core/facade/navigation.facade';
import { LoginCredentials } from '../domain/entities/credential';
import { LOGIN_API_SERVICE, LOGIN_REPOSITORY } from '../data/services/login.injection.token';
import { LoginRepositoryImpl } from '../data/repositories/login.repository.impl';
import { LoginRepository } from '../domain/repositories/login.repository';

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
    InputNumberModule],
  providers: [
    { provide: LOGIN_API_SERVICE, useClass: LoginApiServiceImpl },
    { provide: LOGIN_REPOSITORY, useClass: LoginRepositoryImpl }
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  drawerVisible = false;

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

  constructor(@Inject(LOGIN_REPOSITORY) private loginRepository: LoginRepository, private tokenService: TokenService, private navigationFacade: NavigationFacade) { }

  get username() {
    return this.loginForm.get('username')?.value ?? ""
  }

  get password() {
    return this.loginForm.get('password')?.value ?? ""
  }

  onSubmit() {
    const credentials: LoginCredentials = { email: this.username, password: this.password }

    const request = this.loginRepository.login(credentials)

    request.subscribe({
      next: (token) => {
        this.navigationFacade.navigate("dashboard")
        this.tokenService.setToken(token);
      },
      error: (error) => console.error(error)
    });
  }
}
