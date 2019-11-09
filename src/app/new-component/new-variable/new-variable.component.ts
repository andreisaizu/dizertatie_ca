import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Variable } from 'src/app/common/variable';
import { VariableType } from 'src/app/common/variableTypeEnum';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-new-variable',
  templateUrl: './new-variable.component.html',
  styleUrls: ['./new-variable.component.css']
})
export class NewVariableComponent implements OnInit {

  variable:Variable = new Variable();
  constructor() { }

  @Output() newVariableEmitter = new EventEmitter<Variable>();

  ngOnInit() {
  }

  onAddVariable(){
    var newVariable:Variable = new Variable();
    newVariable.id = uuid();
    newVariable.name="index";
    newVariable.value="1";
    newVariable.type=VariableType.Number;

    this.newVariableEmitter.emit(newVariable);
  }

}
