import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLoaderService } from './app-loader.service';
import { HttpClientModule } from '@angular/common/http';

export function initApp(appLoaderService: AppLoaderService) {
  return () => appLoaderService.load();
}

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    AppLoaderService,
    { provide: APP_INITIALIZER, useFactory: initApp, deps: [AppLoaderService], multi: true },
  ],
})
export class AppLoaderModule {
}
