import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ChallengeItem } from '../../challenge/challengeItem';
import { ChallengeItemTask } from '../../challenge/challengeItemTask';
import { Choice } from '../../challenge/choice';
import { ChoiceValue } from '../../challenge/choiceValue';
import { ChallengeItemAnswer } from '../../challenge/challengeItemAnswer';
import { ChallengeItemTaskAnswer } from '../../challenge/challengeItemTaskAnswer';
import { ChallengeValidatedItemAnswer } from '../../challenge/challengeValidatedItemAnswer';

@Component({
  selector: 'app-correct-order',
  templateUrl: './correct-order.component.html',
  styleUrls: ['./correct-order.component.css']
})
export class CorrectOrderComponent implements OnInit {

  @Input() challengeItem: ChallengeItem;
  @Output() challengeItemAnswerEmitter = new EventEmitter<ChallengeItemAnswer>();
  itemAnswer: ChallengeItemAnswer = new ChallengeItemAnswer();
  validatedAnswer: ChallengeValidatedItemAnswer = new ChallengeValidatedItemAnswer();
  validated: boolean = false;

  drop(event: CdkDragDrop<ChoiceValue[]>) {
    moveItemInArray(this.challengeItem.challengeItemTaskList[0].choiceList[0].values, event.previousIndex, event.currentIndex);
  }

  constructor() { }

  ngOnInit(): void {
  }

  submitAnswer() {
    this.itemAnswer.taskAnswers = new Array();  
    this.itemAnswer.challengeItemId = this.challengeItem.id;
    this.challengeItem.challengeItemTaskList.forEach(itemTask => {
      let challengeItemTaskAnswer: ChallengeItemTaskAnswer = new ChallengeItemTaskAnswer();
      challengeItemTaskAnswer.challengeItemTaskId = itemTask.id;
      this.challengeItem.challengeItemTaskList[0].choiceList[0].values.forEach(value => {
        challengeItemTaskAnswer.selectedChoicesValues.push(value.value);
      })
      this.itemAnswer.taskAnswers.push(challengeItemTaskAnswer);
    });
    this.challengeItemAnswerEmitter.emit(this.itemAnswer);
  }

  receiveAnswer(challengeValidatedItemAnswers: ChallengeValidatedItemAnswer) {
    this.validated = true;
    this.validatedAnswer = challengeValidatedItemAnswers;
  }

}
