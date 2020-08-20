import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "./api.service";
import { Challenge } from "../common/challenge/challenge";
import { ChallengeTemplate } from "../common/challenge/challengeTemplate";
import { ChallengeAnswer } from "../common/challenge/challengeAnswer";
import { ChallengeValidatedAnswer } from "../common/challenge/challengeValidatedAnswer";


@Injectable({
    providedIn: "root"
})
export class ChallengesService {
    endpoint = '/challenges';

    constructor(private apiService: ApiService) { }

    getChallengeById(challengeId: number): Observable<Challenge> {
        return this.apiService.get(`${this.endpoint}/${challengeId}`);
    }
    
    getChallengeByTemplate(template: string): Observable<Challenge> {
        if (template == undefined) template = "";
        return this.apiService.get(`${this.endpoint}/byTemplate/${template}`);
    }

    getVariableChallenge(): Observable<Challenge> {
        return this.getChallengeByTemplate(ChallengeTemplate[ChallengeTemplate.VARIABLE]);
    }

    sendAnswers(challengeAnswers: ChallengeAnswer): Observable<ChallengeValidatedAnswer> {
        return this.apiService.post(`${this.endpoint}/validateAnswer`, challengeAnswers);
    }

}