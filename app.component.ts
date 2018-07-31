import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'FormReactive';
  profileForm = new FormGroup({
    firstName: new FormControl('',[Validators.required,Validators.maxLength(15),Validators.pattern("^[a-zA-Z]*$")]),
    lastName: new FormControl('',[Validators.required,Validators.maxLength(15),Validators.pattern("^[a-zA-Z]*$")]),
    email: new FormControl('',[Validators.required,Validators.email,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$")]),
    contactno: new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern('[0-9]*')]),
    password: new FormControl('',[Validators.required,Validators.pattern("/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}$/")]),
    confirmPassword: new FormControl('',[Validators.required,Validators.pattern("/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}$/")]),
    gender: new FormControl('',[Validators.required,Validators.maxLength(15),Validators.pattern("^[a-zA-Z]*$")]),
    EmpId: new FormControl('',[Validators.required,Validators.maxLength(4),Validators.minLength(4),Validators.pattern('[0-9]*')]),
  });
  
  onSubmit(){
    console.warn(this.profileForm.value);
  }
}
