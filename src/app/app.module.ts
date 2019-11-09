import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatFormFieldModule, MatInputModule, MatCardModule,MatTooltipModule, MatDialogModule } from '@angular/material';

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
    EditDialogVariableComponent
  ],
  imports: [
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
    MatDialogModule
  ],
  providers: [],
  entryComponents: [EditDialogVariableComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
