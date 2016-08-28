import { bootstrap }    from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { CarListComponent } from './car/car-list.component';

bootstrap(CarListComponent, [HTTP_PROVIDERS]);