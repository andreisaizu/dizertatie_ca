import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Variable } from 'src/app/common/variable';

@Component({
  selector: 'app-edit-dialog-variable',
  templateUrl: './edit-dialog-variable.component.html',
  styleUrls: ['./edit-dialog-variable.component.css']
})
export class EditDialogVariableComponent implements OnInit {
  newValue:number;

  constructor(public dialogRef: MatDialogRef<EditDialogVariableComponent>,
    @Inject(MAT_DIALOG_DATA) public variable: Variable) { }

  ngOnInit() {
  }

  onClickEdit(){
    if(this.newValue!=null){
      this.dialogRef.close({ newValue: this.newValue });
    }
    else{
      this.dialogRef.close();
    }
  }

  onClickClose(){
    this.dialogRef.close();
  }

}
