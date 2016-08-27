import { Injectable } from '@angular/core';
import { Car } from './car';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class CarService {

    public values: any;

    constructor(public _http: Http) { }

    private _heroesUrl = 'http://localhost:61553/api/values'; // URL to web api

    getHeroes() {
        return this._http.get(this._heroesUrl)
            .map(res => <Car[]>res.json())
            .catch(this.handleError);
    }
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}