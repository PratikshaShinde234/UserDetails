import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public submitted: boolean = false;
  public loginpg: boolean = true;
  public userdetail: boolean = false;
  public question: boolean = false;

  constructor(public fb: FormBuilder, public router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required],
      // 'emailid': ['', Validators.required],
      // 'phonenum': ['', Validators.required],
    })
  }

  next(ev) {
    //this.submitted = true;
      if (ev == 'userdetail') {
        this.userdetail = true;
        this.loginpg = false;
        this.question = false;
      } else if (ev == 'question') {
        this.userdetail = false;
        this.loginpg = false;
        this.question = true;
        this.loginForm.addControl('emailid', new FormControl('', Validators.required));
        this.loginForm.addControl('phonenum', new FormControl('', Validators.required));
        if (this.loginForm.invalid) {
          alert('Invalid');
        } else {
          alert('Valid');
        }
      } else {
        this.loginForm.addControl('city', new FormControl('', Validators.required));
        this.loginForm.addControl('friend', new FormControl('', Validators.required));
        if (this.loginForm.invalid) {
          alert('Invalid');
        } 
      }
  }

  // save() {
  //   this.service.sendData(this.loginForm.controls.username.value, this.loginForm.controls.password.value).subscribe(res => {
  //     return res;
  //     console.log(res);
  //   })
  // }

}



