import { Component, OnInit, ViewChild } from '@angular/core';
import { Challenge } from '../../../common/challenge/challenge';
import { ChallengeItem } from '../../../common/challenge/challengeItem';
import { ChallengesService } from '../../../services/challenges.service';
import { ChallengeItemAnswer } from '../../../common/challenge/challengeItemAnswer';
import { ChallengeAnswer } from '../../../common/challenge/challengeAnswer';
import { JsonParserService } from '../../../services/jsonParser.service';
import { SingleChoiceComponent } from '../../../common/challenge-types/single-choice/single-choice.component';

@Component({
  selector: 'app-variable-challenge',
  templateUrl: './variable-challenge.component.html',
  styleUrls: ['./variable-challenge.component.css']
})
export class VariableChallengeComponent implements OnInit {

  @ViewChild(SingleChoiceComponent)
  private singleChoiceComponent: SingleChoiceComponent;
  
  challenge: Challenge;

  challengeAnswers: ChallengeAnswer = new ChallengeAnswer();

  constructor(private challengesService: ChallengesService, private jsonParserService: JsonParserService) { }

  ngOnInit(): void {
    this.challengesService.getVariableChallenge().subscribe(result => {
      this.challenge = this.jsonParserService.serializeChallengeObject(result);
      this.challengeAnswers.challengeId = this.challenge.id;
    });
  }

  checkItemInstanceOf(challengeItem: ChallengeItem, type: String): boolean {
    if (challengeItem.constructor.name == type) {
      return true;
    }
    return false;
  }

  onAddedNewAnswer(challengeItemAnswer: ChallengeItemAnswer) {
    this.challengeAnswers.challengeItemAnswers.push(challengeItemAnswer);
  }

  submitAnswers(): void {
    this.singleChoiceComponent.submit();
  }

}


