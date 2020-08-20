import { Component, OnInit } from '@angular/core';
import { LoginService } from 'app/services/login.service';
import { LoginDto } from 'app/common/login/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    data : Date = new Date();
    focus;
    focus1;

    constructor(private loginService: LoginService) { }

    ngOnInit() {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');

        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');

        sessionStorage.setItem('token', '');
    }

    model: LoginDto = new LoginDto();
  
    login() {
      this.loginService.login(this.model);
    }


    ngOnDestroy(){
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('login-page');

        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    }

}
