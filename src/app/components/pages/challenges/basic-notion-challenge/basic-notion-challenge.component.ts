import { Component, OnInit, ViewChild } from '@angular/core';
import { SingleChoiceComponent } from '../../../../common/challenge-types/single-choice/single-choice.component';
import { MultipleChoiceComponent } from '../../../../common/challenge-types/multiple-choice/multiple-choice.component';
import { TrueFalseComponent } from '../../../../common/challenge-types/true-false/true-false.component';
import { CorrectOrderComponent } from '../../../../common/challenge-types/correct-order/correct-order.component';
import { ActivatedRoute } from '@angular/router';
import { JsonParserService } from '../../../../services/jsonParser.service';
import { ChallengesService } from '../../../../services/challenges.service';
import { Challenge } from '../../../../common/challenge/challenge';
import { ChallengeAnswer } from '../../../../common/challenge/challengeAnswer';
import { ChallengeItem } from '../../../../common/challenge/challengeItem';
import { ChallengeItemAnswer } from '../../../../common/challenge/challengeItemAnswer';
import { ChallengeValidatedItemAnswer } from '../../../../common/challenge/challengeValidatedItemAnswer';
import { ChallengeAttempt } from 'app/common/challenge/challengeAttempt';
import { ChallengesAttemptService } from 'app/services/challengesAttemptService';

@Component({
  selector: 'app-basic-notion-challenge',
  templateUrl: './basic-notion-challenge.component.html',
  styleUrls: ['./basic-notion-challenge.component.css']
})
export class BasicNotionChallengeComponent implements OnInit {

  @ViewChild(SingleChoiceComponent)
  private singleChoiceComponent: SingleChoiceComponent;

  @ViewChild(MultipleChoiceComponent)
  private multipleChoiceComponent: MultipleChoiceComponent;

  @ViewChild(TrueFalseComponent)
  private trueFalseComponent: TrueFalseComponent;

  @ViewChild(CorrectOrderComponent)
  private correctOrderComponent: CorrectOrderComponent;

  style1: boolean = false;
  style2: boolean = true;
  totalScore: number;

  validated: boolean = false;

  challenge: Challenge = new Challenge();

  challengeAnswers: ChallengeAnswer = new ChallengeAnswer();

  challengeAttempts:Array<ChallengeAttempt> = new Array<ChallengeAttempt>();

  constructor(private challengesService: ChallengesService, private challengesAttemptService: ChallengesAttemptService, private jsonParserService: JsonParserService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let fromLessonWindow: boolean = window.history.state.fromLesson;

    // this.challengesService.getVariableChallenge().subscribe(result => {
    this.activatedRoute.params.subscribe(params => {
      let challengeId = params['id'];
      this.challengesService.getChallengeById(challengeId).subscribe(result => {
        if (fromLessonWindow == null) {
          // this.openDialog();
        }
        
        this.challengesAttemptService.getChallengeAttemptsByChallengeId(challengeId).subscribe(result =>{
          this.challengeAttempts = result.challengeAttemptList;
        });

        this.challenge = this.jsonParserService.serializeChallengeObject(result);
        this.challengeAnswers.challengeId = this.challenge.id;
      });
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
    this.challengeAnswers.challengeItemAnswers = new Array();
    this.singleChoiceComponent.submitAnswer();
    this.multipleChoiceComponent.submitAnswer();
    this.trueFalseComponent.submitAnswer();
    // this.correctOrderComponent.submitAnswer();
    this.sendAnswers();
  }

  receiveAnswer(challengeItemAnswers: Array<ChallengeValidatedItemAnswer>): void {
    this.validated = true;
    this.singleChoiceComponent.receiveAnswer(challengeItemAnswers.filter(item => item.type == 'SINGLE_CHOICE')[0]);
    this.multipleChoiceComponent.receiveAnswer(challengeItemAnswers.filter(item => item.type == 'MULTIPLE_CHOICE')[0]);
    this.trueFalseComponent.receiveAnswer(challengeItemAnswers.filter(item => item.type == 'TRUE_OR_FALSE')[0]);
    //this.correctOrderComponent.receiveAnswer(challengeItemAnswers.filter(item => item.type == 'CORRECT_ORDER')[0]);
  }

  sendAnswers() {
    this.challengesService.sendAnswers(this.challengeAnswers).subscribe(res => {
      this.receiveAnswer(res.challengeItemAnswers);
      this.totalScore = res.totalScore;
    });
  }

  // openDialog(): void {
  //   const dialogRef = this.dialog.open(LessonDialogComponent, {
  //     width: '700px',
  //     height: '670px',
  //     data: {lessonType: 'VARIABLE'}
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //   });
  // }


}
