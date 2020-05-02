import { Component, OnInit, Input } from '@angular/core';
import { AbstractInstruction } from '../../common/abstractInstruction';

@Component({
  selector: 'app-abstract-instruction',
  templateUrl: './abstract-instruction.component.html',
  styleUrls: ['./abstract-instruction.component.css']
})
export class AbstractInstructionComponent implements OnInit {

  @Input() abstractInstruction: AbstractInstruction;
  constructor() { }

  ngOnInit(): void {
    let x:number = 0;
  }

}
