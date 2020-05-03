import { Component, OnInit } from '@angular/core';
import { Challenge } from '../../challenge/challenge';
import { ChallengeItem } from '../../challenge/challengeItem';
import { Choice } from '../../challenge/choice';

@Component({
  selector: 'app-true-false',
  templateUrl: './true-false.component.html',
  styleUrls: ['./true-false.component.css']
})
export class TrueFalseComponent implements OnInit {
  challenge: Challenge;
  challengeItemList: Array<ChallengeItem> = new Array<ChallengeItem>();

  challengeItem: ChallengeItem = new ChallengeItem();
  choice1: Choice = new Choice();
  choice2: Choice = new Choice();
  challengeChoiceList: Array<Choice> = new Array<Choice>();


  displayedColumns: string[] = ['id', 'question', 'answer'];
  dataSource: ChallengeItem[] = this.challengeItemList;
  selectedChoiceId:string = '';
  constructor() { }

  ngOnInit(): void {
    this.newFunction();
  }

  newFunction(): void {
    this.choice1.value = false;
    this.choice2.value = true;
    this.challengeChoiceList.push(this.choice1);
    this.challengeChoiceList.push(this.choice2);
    this.challengeItem.choiceList = this.challengeChoiceList;
    this.challengeItem.question = "Test question";
    this.challengeItem.orderId = 1;
    this.challengeItemList.push(this.challengeItem);
  }

}
