import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { JqueryDemoComponent } from './jquery-demo/jquery-demo.component';
import { CountDownComponent } from './count-down/count-down.component';
import { PromiseComponent } from './promise/promise.component';
import { BluebackgroundDirective } from './bluebackground.directive';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    NavBarComponent,
    JqueryDemoComponent,
    CountDownComponent,
    PromiseComponent,
    BluebackgroundDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
