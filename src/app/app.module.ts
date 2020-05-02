import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatFormFieldModule, MatInputModule, MatCardModule,MatTooltipModule, MatDialogModule, MatButtonModule } from '@angular/material';

import {MatSidenavModule} from '@angular/material/sidenav';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import {DragDropModule} from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VariableComponent } from './structures/variable/variable.component';
import { FrameComponent } from './frame/frame.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { NewVariableComponent } from './new-component/new-variable/new-variable.component';
import { NewForComponent } from './new-component/new-for/new-for.component';
import { NewIfComponent } from './new-component/new-if/new-if.component';
import { NewWhileComponent } from './new-component/new-while/new-while.component';
import { NewVariableListComponent } from './new-component/new-variable-list/new-variable-list.component';
import { EditDialogVariableComponent } from './structures/edit-dialog-variable/edit-dialog-variable.component';
import { NewIfListComponent } from './new-component/new-if-list/new-if-list.component';
import { IfComponent } from './structures/if/if.component';
import { InstructionComponent } from './structures/instruction/instruction.component';
import { ComplexInstructionComponent } from './structures/complex-instruction/complex-instruction.component';
import { AbstractInstructionComponent } from './structures/abstract-instruction/abstract-instruction.component';
import { NewVariableDialogComponent } from './structures/new-variable-dialog/new-variable-dialog.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import {MatMenuModule} from '@angular/material/menu';
import { MaterialModule } from './material.module';
import { IfLessonComponent } from './pages/lessons/if-lesson/if-lesson.component';
import { ForLessonComponent } from './pages/lessons/for-lesson/for-lesson.component';
import { WhileLessonComponent } from './pages/lessons/while-lesson/while-lesson.component';
import { VariableLessonComponent } from './pages/lessons/variable-lesson/variable-lesson.component';
import { RouterModule, Routes } from '@angular/router';
import { VariableChallengeComponent } from './pages/challenges/variable-challenge/variable-challenge.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/home',
  //   component: HomePageComponent
  // },
  {
    path: 'lessons/variable',
    component: VariableLessonComponent
  },
  {
    path: 'challenges/variable',
    component: VariableChallengeComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    VariableComponent,
    FrameComponent,
    SideNavComponent,
    NewVariableComponent,
    NewForComponent,
    NewIfComponent,
    NewWhileComponent,
    NewVariableListComponent,
    EditDialogVariableComponent,
    NewIfListComponent,
    IfComponent,
    InstructionComponent,
    ComplexInstructionComponent,
    AbstractInstructionComponent,
    NewVariableDialogComponent,
    HomePageComponent,
    IfLessonComponent,
    ForLessonComponent,
    WhileLessonComponent,
    VariableLessonComponent,
    VariableChallengeComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    DragDropModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatSidenavModule,
    MatCardModule,
    MatTooltipModule,
    MatDialogModule,
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  entryComponents: [EditDialogVariableComponent],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
