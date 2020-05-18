import { Component, OnInit, Input } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { ChallengeItem } from '../../challenge/challengeItem';
import { ChallengeItemTask } from '../../challenge/challengeItemTask';
import { Choice } from '../../challenge/choice';
import { ChoiceValue } from '../../challenge/choiceValue';

@Component({
  selector: 'app-correct-order',
  templateUrl: './correct-order.component.html',
  styleUrls: ['./correct-order.component.css']
})
export class CorrectOrderComponent implements OnInit {

  @Input() challengeItem: ChallengeItem;

  drop(event: CdkDragDrop<ChoiceValue[]>) {
    moveItemInArray(this.challengeItem.challengeItemTaskList[0].choiceList[0].values, event.previousIndex, event.currentIndex);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
