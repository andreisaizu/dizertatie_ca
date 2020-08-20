import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Variable } from 'app/common/variable';
import { VariableType } from 'app/common/variableTypeEnum';

@Component({
  selector: 'app-new-variable',
  templateUrl: './new-variable.component.html',
  styleUrls: ['./new-variable.component.css']
})
export class NewVariableComponent implements OnInit {
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
