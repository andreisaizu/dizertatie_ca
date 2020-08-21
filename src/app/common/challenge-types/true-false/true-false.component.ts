import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ChallengeItem } from '../../challenge/challengeItem';
import { ChallengeItemAnswer } from '../../challenge/challengeItemAnswer';
import { ChallengeValidatedItemAnswer } from '../../challenge/challengeValidatedItemAnswer';
import { ChallengeItemTaskAnswer } from '../../challenge/challengeItemTaskAnswer';
import { MatRadioChange } from '@angular/material/radio';
import { Choice } from '../../challenge/choice';
import { ChallengeItemTask } from '../../challenge/challengeItemTask';
import { ChoiceValue } from '../../challenge/choiceValue';

@Component({
  selector: 'app-true-false',
  templateUrl: './true-false.component.html',
  styleUrls: ['./true-false.component.css']
})
export class TrueFalseComponent implements OnInit {
 
  itemAnswer: ChallengeItemAnswer = new ChallengeItemAnswer();
  validatedAnswer: ChallengeValidatedItemAnswer = new ChallengeValidatedItemAnswer();
  validated: boolean = false;
  @Input() challengeItem: ChallengeItem;

  @Output() challengeItemAnswerEmitter = new EventEmitter<ChallengeItemAnswer>();

  constructor() { }

  ngOnInit(): void {
  }

  submitAnswer() {
    this.itemAnswer.taskAnswers = new Array();
    this.itemAnswer.challengeItemId = this.challengeItem.id;
    this.challengeItem.challengeItemTaskList.forEach(itemTask => {
      let challengeItemTaskAnswer: ChallengeItemTaskAnswer = new ChallengeItemTaskAnswer();
      challengeItemTaskAnswer.challengeItemTaskId = itemTask.id;
      if (itemTask.selectedChoice[0] != null) {
        challengeItemTaskAnswer.selectedChoicesIds.push(itemTask.selectedChoice[0].values[0].choiceItemId);
      }

      this.itemAnswer.taskAnswers.push(challengeItemTaskAnswer);
    });
    this.challengeItemAnswerEmitter.emit(this.itemAnswer);
  }

  receiveAnswer(challengeValidatedItemAnswers: ChallengeValidatedItemAnswer) {
    this.validated = true;
    this.validatedAnswer = challengeValidatedItemAnswers;
  }

  onChoiceSelected(event: MatRadioChange): void {
    let choiceValue: ChoiceValue = event.value;
    let currentChoice: Choice;
    let currentItemTask: ChallengeItemTask;

    this.challengeItem.challengeItemTaskList.forEach(challengeItemTask => {
      challengeItemTask.choiceList.forEach(choice => {
        choice.values.forEach(value => {
          if (value.choiceItemId == choiceValue.choiceItemId) {
            currentChoice = choice;
            currentItemTask = challengeItemTask;
          }
        })
      })
    })

    currentItemTask.selectedChoice = new Array();
    currentItemTask.selectedChoice.push(currentChoice);

    let itemTaskIdx = this.challengeItem.challengeItemTaskList.findIndex(itemTask => itemTask.id == currentItemTask.id);
    this.challengeItem.challengeItemTaskList[itemTaskIdx] = currentItemTask;
  }

}
