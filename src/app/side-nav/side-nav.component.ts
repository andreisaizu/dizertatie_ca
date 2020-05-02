import { Component, OnInit } from '@angular/core';
import { Variable } from '../common/variable';
import { If } from '../common/if';

import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Instruction } from '../common/instruction';
import { AbstractInstruction } from '../common/abstractInstruction';
import { ComplexInstruction } from '../common/complexInstruction';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  instructionList: Array<AbstractInstruction>;
  opened: boolean;
  constructor() { }

  ngOnInit() {
    this.instructionList = new Array<AbstractInstruction>();
  }

  onAddedNewVariable(variable: Variable) {
    let instruction:Instruction = new Instruction();
    instruction.component = variable;
    this.instructionList.push(instruction);
  }

  onAddedNewIf(ifVariable: If) {
    let complexInstruction: ComplexInstruction = new ComplexInstruction();
    let baseInstruction: Instruction = new Instruction();
    baseInstruction.component = ifVariable;
    complexInstruction.baseInstruction = baseInstruction;
    this.instructionList.push(complexInstruction);
  }

  // onEditVariableList(variableList: Array<Variable>) {
  //   this.newVariables = variableList;
  // }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.instructionList, event.previousIndex, event.currentIndex);
  }
}
