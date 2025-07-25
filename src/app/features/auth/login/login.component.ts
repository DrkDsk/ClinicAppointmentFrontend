import { Component } from '@angular/core';
import { AuthApiService } from './auth-api.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { InputNumberModule } from 'primeng/inputnumber';
import { PasswordModule } from 'primeng/password';
import { LoginCredentials } from './interfaces/credential';
import { NavigationFacade } from '../../../shared/facade/navigation.facade';

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

  constructor(private apiService: AuthApiService, private navigationFacade: NavigationFacade) { }

  get username() {
    return this.loginForm.get('username')?.value ?? ""
  }

  get password() {
    return this.loginForm.get('password')?.value ?? ""
  }

  onSubmit() {
    const credentials: LoginCredentials = { email: this.username, password: this.password }

    const request = this.apiService.login(credentials)

    request.subscribe({
      next: (_) => this.navigationFacade.navigate("dashboard"),
      error: (error) => console.error(error)
    });
  }
}
