import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!: FormGroup;
  fail = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {}
  
  ngOnInit() {
    this.initForms();
  }

  initForms() {
    this.loginForm = this.fb.group({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    })
  }

  submitLogin() {
    if (!this.userService.login(this.loginForm.value)) {
      this.fail = true;
    } else {
      this.router.navigateByUrl('');
    }
  }
}
