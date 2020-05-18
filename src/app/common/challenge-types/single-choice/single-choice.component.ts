import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ChallengeItem } from '../../challenge/challengeItem';
import { ChallengeItemAnswer } from '../../challenge/challengeItemAnswer';
import { ChallengeItemTask } from '../../challenge/challengeItemTask';
import { ChallengeItemTaskAnswer } from '../../challenge/challengeItemTaskAnswer';
import { ChallengeValidatedAnswer } from '../../challenge/challengeValidatedAnswer';
import { ChallengeValidatedItemAnswer } from '../../challenge/challengeValidatedItemAnswer';
import { Choice } from '../../challenge/choice';
import { MatRadioChange } from '@angular/material/radio';
import { ChoiceValue } from '../../challenge/choiceValue';

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
      challengeItemTaskAnswer.selectedChoicesIds.push(itemTask.selectedChoice[0].values[0].choiceItemId);
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
          if(value.choiceItemId == choiceValue.choiceItemId){
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
