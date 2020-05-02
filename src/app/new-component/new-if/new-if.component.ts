import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { If } from '../../common/if';
import { IfCondition } from '../../common/ifCondition';
import { IfConfitionSymbolEnum } from '../../common/ifConditionSymbolEnum';

@Component({
  selector: 'app-new-if',
  templateUrl: './new-if.component.html',
  styleUrls: ['./new-if.component.css']
})
export class NewIfComponent implements OnInit {

  constructor() { }

  @Output() newIfEmitter = new EventEmitter<If>();

  ngOnInit() {
  }

  onAddIfStructure(){
    var newIf:If = new If();
    var newCondition:IfCondition = new IfCondition();
    newIf.id = uuid();
    newCondition.leftMember=2;
    newCondition.rightMember=3;
    newIf.condition= newCondition;
    newCondition.conditionSymbol = IfConfitionSymbolEnum.Equals;
    this.newIfEmitter.emit(newIf);
  }

}
