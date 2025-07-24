import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  login(username: string, password: string) {
    console.log({ username, password });
  }

}
