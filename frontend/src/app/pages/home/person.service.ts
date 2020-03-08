import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import {
    Person,
    DiseasePrediction,
    ModelParameters,
    ModelResult,
} from "./types";

const SERVER_URL: string = 'api/';

@Injectable()
export class PersonService {

    constructor(private http: Http) {
    }

    public trainModel(modelParameters: ModelParameters): Observable<ModelResult> {
        return this.http.post(`${SERVER_URL}train`, modelParameters).map((res) => res.json());
    }

   public predictDisease(person: Person): Observable<DiseasePrediction> {
        return this.http.post(`${SERVER_URL}predict`, person).map((res) => res.json());
    }
}
