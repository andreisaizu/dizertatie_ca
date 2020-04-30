import { Component, OnInit } from '@angular/core';
import { Variable } from '../common/variable';
import { If } from '../common/if';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  newVariables:Array<Variable>;
  newIfs:Array<If>;
  opened: boolean;
  constructor() { }

  ngOnInit() {
    this.newVariables = new Array<Variable>();  
    this.newIfs = new Array<If>();
  }

  onAddedNewVariable(variable:Variable){
    this.newVariables.push(variable);
  }

   onAddedNewIf(ifVariable:If){
    this.newIfs.push(ifVariable);
  }

  onEditVariableList(variableList:Array<Variable>){
    this.newVariables = variableList;
  }

}
