import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ChallengeItem } from '../../challenge/challengeItem';
import { ChallengeItemAnswer } from '../../challenge/challengeItemAnswer';
import { ChallengeItemTask } from '../../challenge/challengeItemTask';
import { ChallengeItemTaskAnswer } from '../../challenge/challengeItemTaskAnswer';
import { ChallengeValidatedAnswer } from '../../challenge/challengeValidatedAnswer';
import { ChallengeValidatedItemAnswer } from '../../challenge/challengeValidatedItemAnswer';

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

  onChoiceSelected(): void {
    let x = 0;
  }

  submitAnswer() {
    this.itemAnswer.challengeItemId = this.challengeItem.id;
    this.challengeItem.challengeItemTaskList.forEach(itemTask => {
      let challengeItemTaskAnswer: ChallengeItemTaskAnswer = new ChallengeItemTaskAnswer();
      challengeItemTaskAnswer.challengeItemTaskId = itemTask.id;
      challengeItemTaskAnswer.selectedChoicesIds.push(itemTask.selectedChoice.id);
      this.itemAnswer.taskAnswers.push(challengeItemTaskAnswer);
    });
    this.challengeItemAnswerEmitter.emit(this.itemAnswer);
  }

  receiveAnswer(challengeValidatedItemAnswers: ChallengeValidatedItemAnswer) {
    this.validated = true;
    this.validatedAnswer = challengeValidatedItemAnswers;
  }

}
