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
    private courseList: Array<Course> = new Array();


    constructor(public location: Location, private element: ElementRef, private coursesService: CoursesService, private jsonParseService: JsonParserService, private router : Router) {
        this.sidebarVisible = false;
    }

    ngOnInit() {
        this.coursesService.getCoursesByUser().subscribe(result => {
            this.courseList = this.jsonParseService.deserializeCourseList(result);
        });

        this.loggedUser.firstName = sessionStorage.getItem('firstName');
        this.loggedUser.lastName = sessionStorage.getItem('lastName');

        const navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    }
    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const html = document.getElementsByTagName('html')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');

        this.sidebarVisible = true;
    };
    sidebarClose() {
        const html = document.getElementsByTagName('html')[0];
        // console.log(html);
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
    sidebarToggle() {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
    };

    isDocumentation() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee === '/documentation') {
            return true;
        }
        else {
            return false;
        }
    }

    goToComponent(url: string, id: number) {
        this.router.navigateByUrl(url+'/'+id);
    }
}
