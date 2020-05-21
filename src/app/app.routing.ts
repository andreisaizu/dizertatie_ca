import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './examples/landing/landing.component';
import { LoginComponent } from './examples/login/login.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { HomeComponent } from './components/pages/home/home.component';
import { BasicNotionLessonComponent } from './components/pages/lessons/basic-notion-lesson/basic-notion.component';
import { VariableLessonComponent } from './components/pages/lessons/variable-lesson/variable-lesson.component';
import { BasicNotionChallengeComponent } from './components/pages/challenges/basic-notion-challenge/basic-notion-challenge.component';

const routes: Routes =[
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index',                component: HomeComponent },
    { path: 'nucleoicons',          component: NucleoiconsComponent },
    { path: 'examples/landing',     component: LandingComponent },
    { path: 'examples/login',       component: LoginComponent },
    { path: 'examples/profile',     component: ProfileComponent },
    { path: 'lessons/basic-notions',component: BasicNotionLessonComponent},
    { path: 'lessons/variable',component: VariableLessonComponent},
    { path: 'challenges/basic-notions',component: BasicNotionChallengeComponent},
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
