import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { BaseService } from './app-base.service';
import { map, tap } from 'rxjs/internal/operators';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AppLoaderService extends BaseService {

  public load(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.getFakeApi('someURL').subscribe((response: any) => {
        console.log('response from FakeApi:::', response);
        resolve(true);
      });

      /*
      this.getAPI(this.envUrl).subscribe((response: any) => {
        console.log('response from the server:::', response);
        this.configSettings = response;
        resolve(true);
      });*/

    });
  }
}
