import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Variable } from 'src/app/common/variable';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogVariableComponent } from '../edit-dialog-variable/edit-dialog-variable.component';

@Component({
  selector: 'app-variable',
  templateUrl: './variable.component.html',
  styleUrls: ['./variable.component.css']
})
export class VariableComponent implements OnInit {

  @Input() variable:Variable;
  @Output() editVariableEmitter = new EventEmitter<Variable>();
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(EditDialogVariableComponent, {
      width: '250px',
      data: {variable: this.variable}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.variable.value = result.newValue;
      this.editVariableEmitter.emit(this.variable);
    });
  }

  

}
