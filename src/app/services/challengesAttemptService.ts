import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "./api.service";
import { ChallengeAttemptDto } from 'app/common/challenge/challengeAttemptDto';


@Injectable({
    providedIn: "root"
})
export class ChallengesAttemptService {
    endpoint = '/challenges/attempts';

    constructor(private apiService: ApiService) { }

    getChallengeAttemptsByChallengeId(challengeId: number): Observable<ChallengeAttemptDto> {
        return this.apiService.get(`${this.endpoint}/${challengeId}`);
    }
    
}