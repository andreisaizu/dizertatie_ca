import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Variable } from '../../common/variable';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogVariableComponent } from '../edit-dialog-variable/edit-dialog-variable.component';
import { If } from '../../common/if';
import { IfCondition } from '../../common/ifCondition';

@Component({
  selector: 'app-if',
  templateUrl: './if.component.html',
  styleUrls: ['./if.component.css']
})
export class IfComponent implements OnInit {

  @Input() newIf: If;
  @Output() editIfEmitter = new EventEmitter<If>();
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(EditDialogVariableComponent, {
      width: '250px',
      data: { ifStruct: this.newIf }
    });

    dialogRef.afterClosed().subscribe(result => {
      ifCondition: IfCondition;
      this.newIf.condition = result.newValue;
      this.editIfEmitter.emit(this.newIf);
    });
  }
}
