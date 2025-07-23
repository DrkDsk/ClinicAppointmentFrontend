import { Component } from '@angular/core';
import { AuthApiService } from './auth-api.service';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-login.component',
  imports: [ReactiveFormsModule, ButtonModule, CardModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

  username = new FormControl<string>('', {
    nonNullable: true,
    validators: [Validators.required]
  });

  password = new FormControl<string>('', {
    nonNullable: true,
    validators: [Validators.required, Validators.minLength(6)]
  });

  constructor(private apiService: AuthApiService) {

  }

  onSubmit() {
    const credentials = { username: this.username.value, password: this.password.value }
    this.apiService.login(credentials.username, credentials.password)
  }

}
