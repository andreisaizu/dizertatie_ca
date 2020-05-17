import { Component, OnInit, ViewChild } from '@angular/core';
import { Challenge } from '../../../common/challenge/challenge';
import { ChallengeItem } from '../../../common/challenge/challengeItem';
import { ChallengesService } from '../../../services/challenges.service';
import { ChallengeItemAnswer } from '../../../common/challenge/challengeItemAnswer';
import { ChallengeAnswer } from '../../../common/challenge/challengeAnswer';
import { JsonParserService } from '../../../services/jsonParser.service';
import { SingleChoiceComponent } from '../../../common/challenge-types/single-choice/single-choice.component';
import { MatDialog } from '@angular/material/dialog';
import { LessonDialogComponent } from '../../lessons/dialog/lesson-dialog/lesson-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ChallengeValidatedAnswer } from '../../../common/challenge/challengeValidatedAnswer';
import { ChallengeValidatedItemAnswer } from '../../../common/challenge/challengeValidatedItemAnswer';
import { MultipleChoiceComponent } from '../../../common/challenge-types/multiple-choice/multiple-choice.component';

@Component({
  selector: 'app-variable-challenge',
  templateUrl: './variable-challenge.component.html',
  styleUrls: ['./variable-challenge.component.css']
})
export class VariableChallengeComponent implements OnInit {

  @ViewChild(SingleChoiceComponent)
  private singleChoiceComponent: SingleChoiceComponent;

  @ViewChild(MultipleChoiceComponent)
  private multipleChoiceComponent: MultipleChoiceComponent;

  style1:boolean = false;
  style2:boolean = true;
  
  challenge: Challenge;

  challengeAnswers: ChallengeAnswer = new ChallengeAnswer();

  constructor(private challengesService: ChallengesService, private jsonParserService: JsonParserService, public dialog: MatDialog, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    let fromLessonWindow:boolean = window.history.state.fromLesson;

    this.challengesService.getVariableChallenge().subscribe(result => {
      if(fromLessonWindow == null){
        this.openDialog();
      }
      
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
    this.singleChoiceComponent.submitAnswer();
    this.multipleChoiceComponent.submitAnswer();
    this.sendAnswers();
  }

  receiveAnswer(challengeItemAnswers: ChallengeValidatedItemAnswer):void{
    this.singleChoiceComponent.receiveAnswer(challengeItemAnswers);
    this.multipleChoiceComponent.receiveAnswer(challengeItemAnswers);

  }

  sendAnswers() {
    this.challengesService.sendAnswers(this.challengeAnswers).subscribe( res => {
      this.receiveAnswer(res.challengeItemAnswers[0]);
      let x = 0;
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LessonDialogComponent, {
      width: '700px',
      height: '670px',
      data: {lessonType: 'VARIABLE'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}


