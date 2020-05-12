import { ChallengeItem } from "../common/challenge/challengeItem";
import { SingleChoiceChallenge } from "../common/challenge/singleChoiceChallenge";
import { MultipleChoiceChallenge } from "../common/challenge/multipleChoiceChallenge";
import { ChallengeItemTask } from "../common/challenge/challengeItemTask";
import { Choice } from "../common/challenge/choice";
import { Challenge } from "../common/challenge/challenge";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class JsonParserService {

    getChallengeItemByType(type: string): ChallengeItem {
        let challengeItem: ChallengeItem;
    
        if (type == "SINGLE_CHOICE") {
          challengeItem = new SingleChoiceChallenge();
        }
        else if (type == "MULTIPLE_CHOICE") {
          challengeItem = new MultipleChoiceChallenge();
        }
        else if (type == "TRUE_OR_FALSE") {
        }
        else if (type == "CORRECT_ORDER") {
        }
        return challengeItem;
      }
    
      getChallengeItemList(jsonChallengeItemList: Array<Object>, challengeId:number): Array<ChallengeItem> {
        let challengeItemList: Array<ChallengeItem> = new Array();
        jsonChallengeItemList.forEach(jsonItem => {
          let challengeItem = this.getChallengeItem(jsonItem);
          challengeItem.challengeId = challengeId;
          challengeItemList.push(challengeItem);
        });
        return challengeItemList;
      }
    
      getChallengeItem(jsonItem: object): ChallengeItem {
        let challengeItem = this.getChallengeItemByType(jsonItem["challengeItemType"]);
        challengeItem.id = jsonItem["id"];
        challengeItem.description = jsonItem["description"];
        challengeItem.challengeItemTaskList = this.getChallengeItemTaskList(jsonItem["challengeItemTaskList"], challengeItem.id);
        return challengeItem;
      }
    
      getChallengeItemTaskList(jsonItemTaskList: Array<Object>, challengeItemId:number): Array<ChallengeItemTask> {
        let itemTaskList: Array<ChallengeItemTask> = new Array();
        jsonItemTaskList.forEach(jsonTask => {
          let challengeItemTask = this.getChallengeItemTask(jsonTask);
          challengeItemTask.challengeItemId = challengeItemId;
          itemTaskList.push(challengeItemTask);
        });
        return itemTaskList;
      }
    
      getChallengeItemTask(jsonTask: object): ChallengeItemTask {
        let challengeItemTask: ChallengeItemTask = new ChallengeItemTask();
        challengeItemTask.id = jsonTask["id"];
        challengeItemTask.question = jsonTask["question"];
        challengeItemTask.choiceList = this.getTaskChoiceList(jsonTask["choiceList"], challengeItemTask.id);
        return challengeItemTask;
      }
    
      getTaskChoiceList(jsonTaskChoiceList: Array<Object>, challengeItemTaskId:number): Array<Choice> {
        let taskChoiceList: Array<Choice> = new Array();
        jsonTaskChoiceList.forEach(jsonChoice => {
          let taskChoice = this.getTaskChoice(jsonChoice);
          taskChoice.challengeTaskId = challengeItemTaskId;
          taskChoiceList.push(taskChoice);
        })
        return taskChoiceList;
      }
    
      getTaskChoice(jsonChoice: object): Choice {
        let taskChoice: Choice = new Choice();
        taskChoice.value = jsonChoice["value"];
        taskChoice.id = jsonChoice["id"];
       // taskChoice.correct = true;
        return taskChoice;
      }

      serializeChallengeObject(result: Object): Challenge {
        let stringResult: string = JSON.stringify(result);
        var jsonObj = JSON.parse(stringResult);
        let challenge: Challenge = new Challenge();
        challenge.id = jsonObj["id"];
        challenge.challengeItemList = this.getChallengeItemList(jsonObj["challengeItemList"], challenge.id);
        return challenge;
      }
}