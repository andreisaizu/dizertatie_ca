import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ChallengeItem } from '../../challenge/challengeItem';
import { ChallengeItemAnswer } from '../../challenge/challengeItemAnswer';
import { ChallengeItemTaskAnswer } from '../../challenge/challengeItemTaskAnswer';
import { ChallengeValidatedItemAnswer } from '../../challenge/challengeValidatedItemAnswer';
import { MatRadioChange } from '@angular/material/radio';
import { Choice } from '../../challenge/choice';
import { ChallengeItemTask } from '../../challenge/challengeItemTask';
import { ChoiceValue } from '../../challenge/choiceValue';

@Component({
  selector: 'app-multiple-choice',
  templateUrl: './multiple-choice.component.html',
  styleUrls: ['./multiple-choice.component.css']
})
export class MultipleChoiceComponent implements OnInit {

  @Input() challengeItem: ChallengeItem;
  @Output() challengeItemAnswerEmitter = new EventEmitter<ChallengeItemAnswer>();
  itemAnswer: ChallengeItemAnswer = new ChallengeItemAnswer();

  validatedAnswer: ChallengeValidatedItemAnswer = new ChallengeValidatedItemAnswer();
  validated: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  submitAnswer() {
    this.itemAnswer.taskAnswers = new Array();
    this.itemAnswer.challengeItemId = this.challengeItem.id;
    this.challengeItem.challengeItemTaskList.forEach(itemTask => {
      let challengeItemTaskAnswer: ChallengeItemTaskAnswer = new ChallengeItemTaskAnswer();
      challengeItemTaskAnswer.challengeItemTaskId = itemTask.id;
      itemTask.selectedChoice.forEach(choice => {
        challengeItemTaskAnswer.selectedChoicesIds.push(choice.values[0].choiceItemId);
      });

      this.itemAnswer.taskAnswers.push(challengeItemTaskAnswer);
    });
    this.challengeItemAnswerEmitter.emit(this.itemAnswer);
  }

  receiveAnswer(challengeValidatedItemAnswers: ChallengeValidatedItemAnswer) {
    this.validated = true;
    this.validatedAnswer = challengeValidatedItemAnswers;
  }

  onSelectedChoice(event: MatRadioChange, choiceValue: ChoiceValue) {
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

    if (event.source.checked) {
      currentItemTask.selectedChoice.push(currentChoice);
    }
    else {
      let choiceIdx = currentItemTask.selectedChoice.findIndex(choice => choice.id == choiceValue.choiceItemId);
      currentItemTask.selectedChoice.splice(choiceIdx, 1);
    }

    let itemTaskIdx = this.challengeItem.challengeItemTaskList.findIndex(itemTask => itemTask.id == currentItemTask.id);
    this.challengeItem.challengeItemTaskList[itemTaskIdx] = currentItemTask;
  }

}
