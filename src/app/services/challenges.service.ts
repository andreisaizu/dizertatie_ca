import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "./api.service";
import { Challenge } from "../common/challenge/challenge";


@Injectable({
    providedIn: "root"
})
export class ChallengesService {
    endpoint = '/challenges';

    constructor(private apiService: ApiService) { }

    getChallengeByTemplate(template: string): Observable<Challenge> { 
        if (template==undefined) template = "";
        return this.apiService.get(`${this.endpoint}/byTemplate/${template}`); 
    }

}