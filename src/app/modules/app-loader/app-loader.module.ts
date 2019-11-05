import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLoaderService } from './app-loader.service';

export function initApp(appLoaderService: AppLoaderService) {
  return () => appLoaderService.load();
}

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    AppLoaderService,
    { provide: APP_INITIALIZER, useFactory: initApp, deps: [AppLoaderService], multi: true },
  ],
})
export class AppLoaderModule {
}
