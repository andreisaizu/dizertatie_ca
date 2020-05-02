import { Component, OnInit, Input } from '@angular/core';
import { ComplexInstruction } from '../../common/complexInstruction';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-complex-instruction',
  templateUrl: './complex-instruction.component.html',
  styleUrls: ['./complex-instruction.component.css']
})
export class ComplexInstructionComponent implements OnInit {

  @Input() complexInstruction: ComplexInstruction;
  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.complexInstruction.instructionList, event.previousIndex, event.currentIndex);
  }

}
