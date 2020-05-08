import { Component, OnInit } from '@angular/core';
import { Challenge } from '../../../common/challenge/challenge';
import { Choice } from '../../../common/challenge/choice';
import { ChallengeItemTask } from '../../../common/challenge/challengeItemTask';
import { ChallengeItem } from '../../../common/challenge/challengeItem';
import { MultipleChoiceChallenge } from '../../../common/challenge/multipleChoiceChallenge';
import { SingleChoiceChallenge } from '../../../common/challenge/singleChoiceChallenge';
import { ChallengesService } from '../../../services/challenges.service';
import { TrueFalseChallenge } from '../../../common/challenge/trueFalseChallenge';
import { CorrectOrderChallenge } from '../../../common/challenge/correctOrderChallenge';

@Component({
  selector: 'app-variable-challenge',
  templateUrl: './variable-challenge.component.html',
  styleUrls: ['./variable-challenge.component.css']
})
export class VariableChallengeComponent implements OnInit {
  challenge: Challenge;

  constructor(private challengesService: ChallengesService) { }

  ngOnInit(): void {
    this.challengesService.getVariableChallenge().subscribe(result => {
      this.challenge = this.serializeChallengeObject(result);
    });
    //this.newFunction();

  }

  // newFunction(): void {
  //   let challengeItemList: Array<ChallengeItem> = new Array<ChallengeItem>();

  //   let challengeItem: SingleChoiceChallenge = new SingleChoiceChallenge();
  //   let choice1: Choice = new Choice();
  //   let choice2: Choice = new Choice();
  //   let challengeItemTaskChoiceList: Array<Choice> = new Array<Choice>();
  //   let challengeItemTaskList: Array<ChallengeItemTask> = new Array<ChallengeItemTask>();
  //   let challengeItemTask = new ChallengeItemTask();


  //   choice1.value = "false";
  //   choice2.value = "true";
  //   challengeItemTaskChoiceList.push(choice1);
  //   challengeItemTaskChoiceList.push(choice2);

  //   challengeItemTask.choiceList = challengeItemTaskChoiceList;


  //   challengeItemTaskList.push(challengeItemTask);
  //   challengeItem.challengeItemTaskList = challengeItemTaskList;


  //   challengeItemList.push(challengeItem);
  //   this.challenge = new Challenge();
  //   this.challenge.challengeItemList = challengeItemList;
  // }

  checkItemInstanceOf(challengeItem: ChallengeItem, type: String): boolean {
    if (challengeItem.constructor.name == type) {
      return true;
    }
    return false;
  }

  serializeChallengeObject(result: Object): Challenge {
    let stringResult: string = JSON.stringify(result);
    var jsonObj = JSON.parse(stringResult);
    let challenge: Challenge = new Challenge();
    challenge.id = jsonObj["id"];
    challenge.challengeItemList = this.getChallengeItemList(jsonObj["challengeItemList"]);
    return challenge;
  }

  getChallengeItemByType(type: string): ChallengeItem {
    let challengeItem: ChallengeItem;

    if (type == "SINGLE_CHOICE") {
      challengeItem = new SingleChoiceChallenge();
    }
    else if (type == "MULTIPLE_CHOICE") {
      challengeItem = new MultipleChoiceChallenge();
    }
    else if (type == "TRUE_OR_FALSE") {
      challengeItem = new TrueFalseChallenge();
    }
    else if (type == "CORRECT_ORDER") {
      challengeItem = new CorrectOrderChallenge();
    }
    return challengeItem;
  }

  getChallengeItemList(jsonChallengeItemList: Array<Object>): Array<ChallengeItem> {
    let challengeItemList: Array<ChallengeItem> = new Array();
    jsonChallengeItemList.forEach(jsonItem => {
      let challengeItem = this.getChallengeItem(jsonItem);
      challengeItemList.push(challengeItem);
    });
    return challengeItemList;
  }

  getChallengeItem(jsonItem: object): ChallengeItem {
    let challengeItem = this.getChallengeItemByType(jsonItem["challengeItemType"]);
    challengeItem.description = jsonItem["description"];
    challengeItem.challengeItemTaskList = this.getChallengeItemTaskList(jsonItem["challengeItemTaskList"]);
    return challengeItem;
  }

  getChallengeItemTaskList(jsonItemTaskList: Array<Object>): Array<ChallengeItemTask> {
    let itemTaskList: Array<ChallengeItemTask> = new Array();
    jsonItemTaskList.forEach(jsonTask => {
      let challengeItemTask = this.getChallengeItemTask(jsonTask);
      itemTaskList.push(challengeItemTask);
    });
    return itemTaskList;
  }

  getChallengeItemTask(jsonTask: object): ChallengeItemTask {
    let challengeItemTask: ChallengeItemTask = new ChallengeItemTask();
    challengeItemTask.question = jsonTask["question"];
    challengeItemTask.choiceList = this.getTaskChoiceList(jsonTask["choiceList"]);
    return challengeItemTask;
  }

  getTaskChoiceList(jsonTaskChoiceList: Array<Object>): Array<Choice> {
    let taskChoiceList: Array<Choice> = new Array();
    jsonTaskChoiceList.forEach(jsonChoice => {
      let taskChoice = this.getTaskChoice(jsonChoice);
      taskChoiceList.push(taskChoice);
    })
    return taskChoiceList;
  }

  getTaskChoice(jsonChoice: object): Choice {
    let taskChoice: Choice = new Choice();
    taskChoice.value = jsonChoice["value"];
    taskChoice.id = jsonChoice["id"];
    return taskChoice;
  }

}


