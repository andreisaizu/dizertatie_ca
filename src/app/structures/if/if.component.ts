import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Variable } from '../../common/variable';
import { MatDialog } from '@angular/material/dialog';
import { If } from '../../common/if';
import { IfCondition } from '../../common/ifCondition';

@Component({
  selector: 'app-if',
  templateUrl: './if.component.html',
  styleUrls: ['./if.component.css']
})
export class IfComponent implements OnInit {

  @Input() newIf: If;
  @Output() editIfEmitter = new EventEmitter<If>();
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
}
