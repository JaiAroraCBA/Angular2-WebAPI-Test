import { Component, OnInit } from '@angular/core';
import { CarService } from './car.service';
import { Car } from './car';

@Component({
    selector: 'my-app',
    template: `<h2>My Cars from WebAPI</h2>
            <ul>
                <li *ngFor="let car of cars">
                    <span>{{car.Make}}</span> {{car.Model}}
                </li>
            </ul>`,
    providers: [CarService]
})

export class CarListComponent implements OnInit {
    cars: Car[];
    errorMessage: string;

    constructor(private carService: CarService) { }

    getCars() {
        this.carService.getCars()
            .subscribe(
            response => this.cars = response,
            error => this.errorMessage = <any>error);
    }

    ngOnInit(): void {
        this.getCars();
    }
}