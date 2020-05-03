import { Component, OnInit, Input } from '@angular/core';
import { ChallengeItem } from '../../challenge/challengeItem';

@Component({
  selector: 'app-multiple-choice',
  templateUrl: './multiple-choice.component.html',
  styleUrls: ['./multiple-choice.component.css']
})
export class MultipleChoiceComponent implements OnInit {

  @Input() challengeItem: ChallengeItem;
  constructor() { }

  ngOnInit(): void {
  }

}
