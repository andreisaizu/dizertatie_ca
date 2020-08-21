import { Component, OnInit, ElementRef } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Course } from 'app/common/course/course';
import { CoursesService } from 'app/services/courses.service';
import { JsonParserService } from 'app/services/jsonParser.service';
import { Router } from '@angular/router';
import { LoginResponse } from 'app/common/login/loginresponse';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    private toggleButton: any;
    private sidebarVisible: boolean;

    private loggedUser: LoginResponse = new LoginResponse();
    private sessionStorage = sessionStorage;
    private firstName:string;
    private lastName:string;
    private courseList: Array<Course> = new Array();


    constructor(public location: Location, private element: ElementRef, private coursesService: CoursesService, private jsonParseService: JsonParserService, private router : Router) {
        this.sidebarVisible = false;
    }

    ngOnInit() {
        this.coursesService.getCoursesByUser().subscribe(result => {
            this.courseList = this.jsonParseService.deserializeCourseList(result);
            this.firstName =  sessionStorage.getItem('firstName');
            this.lastName = sessionStorage.getItem('lastName'); 
        });
    }

    goToComponent(url: string, id: number) {
        this.router.navigateByUrl(url+'/'+id);
    }
}
