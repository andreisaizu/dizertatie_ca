import { Component, OnInit } from '@angular/core';
import { Variable } from '../common/variable';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  newVariables:Array<Variable>;
  opened: boolean;
  constructor() { }

  ngOnInit() {
    this.newVariables = new Array<Variable>();  
  }

  onAddedNewVariable(variable:Variable){
    this.newVariables.push(variable);
  }

  onEditVariableList(variableList:Array<Variable>){
    this.newVariables = variableList;
  }

}
