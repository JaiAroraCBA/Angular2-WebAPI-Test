// import 'rxjs/Rx'; // adds ALL RxJS statics & operators to Observable

// See node_module/rxjs/Rxjs.js

// We could add every RxJS operators with a single import statement. While that is the easiest thing to do, we'd pay a penalty in extended launch time and application size because the full library is so big. We only use a few operators in our app.

// Import just the rxjs statics and operators we need for THIS app.
// If we forget an operator, the TypeScript compiler will warn that it's missing and we'll update this file.

// Statics
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';