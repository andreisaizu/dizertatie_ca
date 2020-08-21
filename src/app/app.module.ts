import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';

import { CKEditorModule } from 'ng2-ckeditor';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { LoginComponent } from './pages/login/login/login.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { NewLessonComponent } from './pages/lessons/new-lesson/new-lesson.component';
import { NewCourseComponent } from './pages/courses/new-course/new-course.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        LoginComponent,
        CoursesComponent,
        NewLessonComponent,
        NewCourseComponent
    ],
    imports: [
        HttpClientModule,
        BrowserAnimationsModule,
        NgbModule,
        FormsModule,
        RouterModule,
        AppRoutingModule,
        ComponentsModule,
        ExamplesModule,
        CKEditorModule
        
    ],
    providers: [{
        provide: MAT_RADIO_DEFAULT_OPTIONS,
        useValue: { color: 'accent' },
    }],
    bootstrap: [AppComponent]
})
export class AppModule { }
