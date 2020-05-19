import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'; 
import { NgModule } from '@angular/core';

import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { DragDropModule } from '@angular/cdk/drag-drop';

import { MAT_LABEL_GLOBAL_OPTIONS, MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatIconRegistry } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule, MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';

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
import { NewIfListComponent } from './new-component/new-if-list/new-if-list.component';
import { IfComponent } from './structures/if/if.component';
import { InstructionComponent } from './structures/instruction/instruction.component';
import { ComplexInstructionComponent } from './structures/complex-instruction/complex-instruction.component';
import { AbstractInstructionComponent } from './structures/abstract-instruction/abstract-instruction.component';
import { NewVariableDialogComponent } from './structures/new-variable-dialog/new-variable-dialog.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MatMenuModule } from '@angular/material/menu';
import { IfLessonComponent } from './pages/lessons/if-lesson/if-lesson.component';
import { ForLessonComponent } from './pages/lessons/for-lesson/for-lesson.component';
import { WhileLessonComponent } from './pages/lessons/while-lesson/while-lesson.component';
import { VariableLessonComponent } from './pages/lessons/variable-lesson/variable-lesson.component';
import { RouterModule, Routes } from '@angular/router';
import { VariableChallengeComponent } from './pages/challenges/variable-challenge/variable-challenge.component';
import { TrueFalseComponent } from './common/challenge-types/true-false/true-false.component';
import { SingleChoiceComponent } from './common/challenge-types/single-choice/single-choice.component';
import { MultipleChoiceComponent } from './common/challenge-types/multiple-choice/multiple-choice.component';
import { CorrectOrderComponent } from './common/challenge-types/correct-order/correct-order.component';
import { TestComponent } from './test/test.component';
import { LessonDialogComponent } from './pages/lessons/dialog/lesson-dialog/lesson-dialog.component';
import { SingleChoiceResultComponent } from './common/challenge-types/single-choice-result/single-choice-result.component';
import { TrueFalseResultComponent } from './common/challenge-types/true-false-result/true-false-result.component';
import { MultipleChoiceResultComponent } from './common/challenge-types/multiple-choice-result/multiple-choice-result.component';
import { CorrectOrderResultComponent } from './common/challenge-types/correct-order-result/correct-order-result.component';
import { NavbarComponent } from './common/navbar/navbar/navbar.component';
import { BasicNotionsLessonComponent } from './pages/lessons/basic-notions-lesson/basic-notions-lesson.component';
import { InstructionTypesComponent } from './pages/lessons/instruction-types/instruction-types.component';
import { ArrayLessonComponent } from './pages/lessons/array-lesson/array-lesson.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'lessons/variable',
    component: VariableLessonComponent
  },
  {
    path: 'lessons/basic-notions',
    component: BasicNotionsLessonComponent
  },
  {
    path: 'lessons/instructions',
    component: InstructionTypesComponent
  },
  {
    path: 'lessons/arrays',
    component: ArrayLessonComponent
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
    VariableChallengeComponent,
    TrueFalseComponent,
    SingleChoiceComponent,
    MultipleChoiceComponent,
    CorrectOrderComponent,
    TestComponent,
    LessonDialogComponent,
    SingleChoiceResultComponent,
    TrueFalseResultComponent,
    MultipleChoiceResultComponent,
    CorrectOrderResultComponent,
    NavbarComponent,
    BasicNotionsLessonComponent,
    InstructionTypesComponent,
    ArrayLessonComponent
  ],
  imports: [
    HttpClientModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    MatNativeDateModule,
    BrowserModule,
    CommonModule,
    DragDropModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [{
    provide: MAT_RADIO_DEFAULT_OPTIONS,
    useValue: { color: 'accent' },
}],
  entryComponents: [],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
