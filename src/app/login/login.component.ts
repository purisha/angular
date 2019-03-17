import { Component, OnInit} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import{ User}from '../User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
  export class LoginComponent implements OnInit {
 

   constructor(private fb:FormBuilder) {}
   
   loginForm: FormGroup;
   
       
   private user:User;
   
	
    ngOnInit() {

	
       this.loginForm  = this.fb.group({
            email: ['',[Validators.required,
                       Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
            password:this.fb.group({
                pwd: ['', [Validators.required, 
                           Validators.minLength(4)]],
                confirmPwd: ['', [Validators.required,
                                 Validators.minLength(4)]]
        
        })
    })
}

get email() { return this.loginForm.get('email'); }
     
get password() { return this.loginForm.get('password'); }

get terms() { return this.loginForm.get('terms'); }

    public onFormSubmit() {
        if(this.loginForm.valid) {
            this.user = this.loginForm.value;
           console.log(this.user);
            /* Any API call logic via services goes here */
			
        }
    }


    } 
 
    
