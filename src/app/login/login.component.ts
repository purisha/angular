import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  erroreMessage: string = "";

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) { }

  get email() { return this.loginForm.get('email'); }

  get password() { return this.loginForm.get('password'); }


  ngOnInit() {

    this.loginForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
      ]],
      password: this.fb.group({
        pwd: ['', [
          Validators.required,
          Validators.minLength(5)
        ]],
        confirmPwd: ['', [
          Validators.required,
          Validators.minLength(5)
        ]],
      })
    });
  }
  onSubmit() {
    if (this.loginForm.invalid) return;

    const formData = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password.pwd
    };

    this.loginService.loginUser(formData).subscribe({
      next: (res: any) => {
        console.log("Login Success:", res);

        // اگه توکن برگردونه
        localStorage.setItem("token", res.token);

        // بعدش کاربر رو هدایت کن
        this.router.navigate(['/gallery']);
      },
      error: (err) => {
        console.log("Login Failed:", err);
        this.erroreMessage = "Incorrect Email or Password!";
      }
    });
  }
}

