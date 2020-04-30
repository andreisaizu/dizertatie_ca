import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { If } from '../../common/if';
import { Condition } from '../../common/condition';
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
    var newCondition:Condition = new Condition();
    newIf.id = uuid();
    newCondition.conditionSymbol = IfConfitionSymbolEnum.Equals;
    this.newIfEmitter.emit(newIf);
  }

}
