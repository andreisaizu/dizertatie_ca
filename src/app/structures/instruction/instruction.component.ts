import { Component, OnInit, Input } from '@angular/core';
import { Instruction } from '../../common/instruction';

@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.css']
})
export class InstructionComponent implements OnInit {

  constructor() { }

  @Input() abstractInstruction: Instruction;
  ngOnInit(): void {
    let x:number = 0;
  }

}
