import { Injectable }    from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Car } from './car';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class CarService {

  constructor (private http: Http) {}
  private _carsUrl = 'http://localhost:51673/api/cars';  // URL to web API

  getCars (): Observable<Car[]> {
    return this.http.get(this._carsUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
      let body = res.json();
      console.log("Hello response: " + body);
      return body.data || { };
  }

  private handleError (error: any) {
      // In a real world app, we might use a remote logging infrastructure
      // We'd also dig deeper into the error to get a better message
      let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console instead
      return Observable.throw(errMsg);
  }

}

/*
  Error: Cannot find a differ supporting object '[object Object]' of type 'object'. NgFor only supports binding to Iterables such as Arrays.

  Example returned data:

  [
  {
    "Make": "Porche",
    "Model": "GT3"
  },
  {
    "Make": "Mercedes",
    "Model": "AMG"
  },
  {
    "Make": "Nissan",
    "Model": "Skyline-GTR"
  }
  ]

*/