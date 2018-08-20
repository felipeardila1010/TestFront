import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MainComponent} from './module/main/main.component';
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from '@angular/forms';

import {CollapseModule} from 'ngx-bootstrap/collapse';
import {FilterComponent} from './shared/filter/filter.component';
import {MainService} from "./module/main/main.service";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CollapseModule.forRoot()
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
