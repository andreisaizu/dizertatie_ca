import { Component, OnInit } from '@angular/core';
import { LoginDto } from 'app/common/login/login';
import { LoginService } from 'app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  model: LoginDto;

  ngOnInit() {
    sessionStorage.setItem('token', '');
    sessionStorage.setItem('username', '');
  }

  login() {
    this.loginService.login(this.model);
  }

}
