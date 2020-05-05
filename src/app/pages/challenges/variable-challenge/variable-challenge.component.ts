import { Component, OnInit } from '@angular/core';
import { Challenge } from '../../../common/challenge/challenge';
import { Choice } from '../../../common/challenge/choice';
import { ChallengeItemTask } from '../../../common/challenge/challengeItemTask';
import { ChallengeItem } from '../../../common/challenge/challengeItem';
import { MultipleChoiceChallenge } from '../../../common/challenge/multipleChoiceChallenge';
import { SingleChoiceChallenge } from '../../../common/challenge/singleChoiceChallenge';
import { ChallengesService } from '../../../services/challenges.service';

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
      this.challenge = result;
    });

  }

  newFunction(): void {
    let challengeItemList: Array<ChallengeItem> = new Array<ChallengeItem>();

    let challengeItem: SingleChoiceChallenge = new SingleChoiceChallenge();
    let choice1: Choice = new Choice();
    let choice2: Choice = new Choice();
    let challengeItemTaskChoiceList: Array<Choice> = new Array<Choice>();
    let challengeItemTaskList:Array<ChallengeItemTask> = new Array<ChallengeItemTask>();
    let challengeItemTask = new ChallengeItemTask();
    

    choice1.value = "false";
    choice2.value = "true";
    challengeItemTaskChoiceList.push(choice1);
    challengeItemTaskChoiceList.push(choice2);

    challengeItemTask.choiceList = challengeItemTaskChoiceList;

    
    challengeItemTaskList.push(challengeItemTask);
    challengeItem.challengeItemTaskList = challengeItemTaskList;


    challengeItemList.push(challengeItem);
    this.challenge = new Challenge();
    this.challenge.challengeItemList=challengeItemList;
  }
}


