import {Injector, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import {createCustomElement} from "@angular/elements";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  entryComponents:[AppComponent],
  providers: [],

})
export class AppModule {
  constructor(private injector: Injector) {
    const appElement = createCustomElement(AppComponent, {
      injector: this.injector
    });
    customElements.define("lr-rss", appElement);
  }
  ngDoBootstrap() { }
}
