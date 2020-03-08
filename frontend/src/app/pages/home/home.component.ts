import {Component, OnInit} from '@angular/core';
import {PersonService} from "./person.service";
import {
    DiseasePrediction,
    ModelParameters,
    ModelResult,
    Person,
} from "./types";

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    public modelParameters: ModelParameters = new ModelParameters();
    public modelResult: ModelResult = new ModelResult();
    
    public person: Person = new Person();
    public diseasePrediction: DiseasePrediction = new DiseasePrediction();

    // graph styling
    public colorScheme = {
        domain: ['#1a242c', '#e81746', '#e67303', '#f0f0f0']
    };

    constructor(private personService: PersonService) {
    }

    ngOnInit() {
    }

    public trainModel() {
        this.personService.trainModel(this.modelParameters).subscribe((result) => {
            this.modelResult = result;
        });
    }

    public predictDisease() {
        if (this.modelResult.accuracy == 0){
            this.personService.trainModel(this.modelParameters).subscribe((result) => {
                this.modelResult = result;   
                
                this.personService.predictDisease(this.person).subscribe((result) => {
                    this.diseasePrediction = result;
                    console.log(this.diseasePrediction)
                });
            });
        }else{
            this.personService.predictDisease(this.person).subscribe((result) => {
                this.diseasePrediction = result;
                console.log(this.diseasePrediction)
            });
        }
    }

}
