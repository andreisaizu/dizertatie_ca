import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ChallengeItem } from '../../challenge/challengeItem';
import { ChallengeItemAnswer } from '../../challenge/challengeItemAnswer';
import { ChallengeItemTask } from '../../challenge/challengeItemTask';
import { ChallengeItemTaskAnswer } from '../../challenge/challengeItemTaskAnswer';
import { ChallengeValidatedAnswer } from '../../challenge/challengeValidatedAnswer';
import { ChallengeValidatedItemAnswer } from '../../challenge/challengeValidatedItemAnswer';
import { Choice } from '../../challenge/choice';
import { MatRadioChange } from '@angular/material/radio';

@Component({
  selector: 'app-single-choice',
  templateUrl: './single-choice.component.html',
  styleUrls: ['./single-choice.component.css']
})
export class SingleChoiceComponent implements OnInit {

  itemAnswer: ChallengeItemAnswer = new ChallengeItemAnswer();
  validatedAnswer: ChallengeValidatedItemAnswer = new ChallengeValidatedItemAnswer();
  validated: boolean = false;
  @Input() challengeItem: ChallengeItem;

  @Output() challengeItemAnswerEmitter = new EventEmitter<ChallengeItemAnswer>();

  constructor() { }

  ngOnInit(): void {
  }

  submitAnswer() {
    this.itemAnswer.challengeItemId = this.challengeItem.id;
    this.challengeItem.challengeItemTaskList.forEach(itemTask => {
      let challengeItemTaskAnswer: ChallengeItemTaskAnswer = new ChallengeItemTaskAnswer();
      challengeItemTaskAnswer.challengeItemTaskId = itemTask.id;
      challengeItemTaskAnswer.selectedChoicesIds.push(itemTask.selectedChoice[0].id);
      this.itemAnswer.taskAnswers.push(challengeItemTaskAnswer);
    });
    this.challengeItemAnswerEmitter.emit(this.itemAnswer);
  }

  receiveAnswer(challengeValidatedItemAnswers: ChallengeValidatedItemAnswer) {
    this.validated = true;
    this.validatedAnswer = challengeValidatedItemAnswers;
  }

  onChoiceSelected(event: MatRadioChange): void {
    let choice: Choice = event.value;
    let currentItemTask: ChallengeItemTask = this.challengeItem.challengeItemTaskList.filter(itemTask => itemTask.id == choice.challengeTaskId)[0];
    currentItemTask.selectedChoice = new Array();
    currentItemTask.selectedChoice.push(choice);

    let itemTaskIdx = this.challengeItem.challengeItemTaskList.findIndex(itemTask => itemTask.id == currentItemTask.id);
    this.challengeItem.challengeItemTaskList[itemTaskIdx] = currentItemTask;
  }

}
