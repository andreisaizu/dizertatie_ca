import { Component, OnInit } from '@angular/core';
import { VariableType } from '../../common/variableTypeEnum';
import { Variable } from '../../common/variable';

@Component({
  selector: 'app-new-variable-dialog',
  templateUrl: './new-variable-dialog.component.html',
  styleUrls: ['./new-variable-dialog.component.css']
})
export class NewVariableDialogComponent implements OnInit {

  constructor() { }

  variable: Variable = new Variable();
  variableTypes: string[] = Object.keys(VariableType);

  ngOnInit(): void {
  }

}
