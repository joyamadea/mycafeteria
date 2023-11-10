import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  dummyLogin = {
    id: 1,
    username: 'john.doe',
    password: '123456'
  }

  login(body: any) {
    if (body.username == this.dummyLogin.username && body.password == this.dummyLogin.password) {
      localStorage.setItem("user", "true");
      localStorage.setItem("userId", this.dummyLogin.id.toString());
      return true;
    } else {
      return false;
    }
  }

  logout() {
    localStorage.removeItem("order");
    localStorage.removeItem("cart");
    localStorage.removeItem("userId");
    localStorage.setItem("user", "false");
  }
}
