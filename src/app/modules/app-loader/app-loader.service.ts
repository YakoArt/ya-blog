import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { map, tap } from 'rxjs/internal/operators';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AppLoaderService {
  constructor() {
  }

}
