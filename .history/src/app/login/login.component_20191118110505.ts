import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(public fb: FormBuilder, public router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required]
    })
  }
  }

}
