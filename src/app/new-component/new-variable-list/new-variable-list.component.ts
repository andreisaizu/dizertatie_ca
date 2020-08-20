import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Variable } from 'app/common/variable';

@Component({
  selector: 'app-new-variable-list',
  templateUrl: './new-variable-list.component.html',
  styleUrls: ['./new-variable-list.component.css']
})
export class NewVariableListComponent implements OnInit {

  @Input() newVariables: Array<Variable>;
  @Output() editedVariableListEmitter = new EventEmitter<Array<Variable>>();
  constructor() { }

  ngOnInit() {
  }

  onEditedVariable(variable:Variable){
    var index:number;
    index = this.newVariables.findIndex(v=> v.id == variable.id);
    this.newVariables[index] = variable;
    this.editedVariableListEmitter.emit(this.newVariables);
  }

  onDeletedVariable(variable:Variable){
    var index:number;
    index = this.newVariables.findIndex(v=> v.id == variable.id);
    this.newVariables.splice(index, 1);
    this.editedVariableListEmitter.emit(this.newVariables);
  }
}
