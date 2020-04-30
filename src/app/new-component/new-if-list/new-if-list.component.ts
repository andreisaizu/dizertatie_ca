import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { If } from '../../common/if';

@Component({
  selector: 'app-new-if-list',
  templateUrl: './new-if-list.component.html',
  styleUrls: ['./new-if-list.component.css']
})
export class NewIfListComponent implements OnInit {

  @Input() newIfs: Array<If>;
  @Output() editedIfListEmitter = new EventEmitter<Array<If>>();
  constructor() { }

  ngOnInit() {
  }

  onEditedIfStructure(ifStruct:If){
    var index:number;
    index = this.newIfs.findIndex(ifS=> ifS.id == ifStruct.id);
    this.newIfs[index] = ifStruct;
    this.editedIfListEmitter.emit(this.newIfs);
  }

  onDeletedIfStructure(ifStruct:If){
    var index:number;
    index = this.newIfs.findIndex(ifS=> ifS.id == ifStruct.id);
    this.newIfs.splice(index, 1);
    this.editedIfListEmitter.emit(this.newIfs);
  }

}
