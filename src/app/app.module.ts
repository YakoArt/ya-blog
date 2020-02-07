import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArticleComponent } from './components/article/article.component';
import { AppLoaderModule } from './modules/app-loader/app-loader.module';
import { NavigationComponent } from './components/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    NavigationComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppLoaderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
