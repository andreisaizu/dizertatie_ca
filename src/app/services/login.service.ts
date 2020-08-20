import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "./api.service";
import { Course } from 'app/common/course/course';
import { LoginDto } from 'app/common/login/login';
import { Router } from '@angular/router';
import { LoginResponse } from 'app/common/login/loginresponse';


@Injectable({
    providedIn: "root"
})
export class LoginService {
    endpoint = '/login';

    constructor(private apiService: ApiService, private router: Router) { }

    login(loginDto: LoginDto): void {

        this.sendLoginRequest(loginDto).subscribe(loginResponse => {
            if (loginResponse.valid) {

                sessionStorage.setItem(
                    'username', loginDto.username
                );

                sessionStorage.setItem('firstName', loginResponse.firstName);
                sessionStorage.setItem('lastName', loginResponse.lastName);
                sessionStorage.setItem('role', loginResponse.role);

                this.router.navigate(['']);
            } else {
                alert("Authentication failed.")
                this.router.navigate(['/login']);
            }
        });
    }

    sendLoginRequest(loginDto: LoginDto): Observable<LoginResponse> {
        return this.apiService.post(this.endpoint, loginDto);
    }
}