import { NgModule } from '@angular/core';

import {  MatButtonModule,MatMenuModule , MatTabsModule ,  MatToolbarModule,MatIconModule,  MatCardModule, MatRadioButton} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatTabsModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatRadioButton
  ],
  exports: [
    MatButtonModule,
    MatTabsModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatRadioButton
  ]
})
export class MaterialModule {}