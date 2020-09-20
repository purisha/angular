import { Component, OnInit} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup, Validators  } from '@angular/forms';
import { User } from '../User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
   loginForm: FormGroup;
    
   constructor(private fb:FormBuilder) {}
   
    get email() { return this.loginForm.get('email'); }
     
    get password() { return this.loginForm.get('password'); }
 
    get terms() { return this.loginForm.get('terms'); }
	
    ngOnInit() {

        this.loginForm  = this.fb.group({
            email: ['',[Validators.required,
                        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
            password: this.fb.group({
                pwd: ['', [Validators.required, 
                           Validators.minLength(8)]],
                confirmPwd: ['', [Validators.required,
                                  Validators.minLength(8)]]
            }),
	     })	 
    }
 }

