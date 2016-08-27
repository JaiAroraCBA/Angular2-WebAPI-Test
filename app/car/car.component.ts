import { Component } from '@angular/core';
import { CarService } from './car.service';

@Component({
  selector: 'my-app',
  templateUrl: 'car-list.template.html',
  providers: [CarService]
})

export class AppComponent { }