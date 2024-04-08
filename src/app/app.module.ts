import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgReactComponent} from './react/ng-react.component';
import {HowToComponent} from './how-to.component';

@NgModule({
  declarations: [AppComponent, NgReactComponent, HowToComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
