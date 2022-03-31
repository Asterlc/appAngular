import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm =this.fb.group({
      name: [''],
      document:[''],
      email: [''],
      password: [''],
      passwordConfirm: [''],
    })
  }

  createUser() {
    let x = this.registerForm.value;
  }

}
