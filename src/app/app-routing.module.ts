import { NgModule } from '@angular/core';
import { ChildActivationEnd, RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { JqueryDemoComponent } from './jquery-demo/jquery-demo.component';
import { CountDownComponent } from './count-down/count-down.component';
import { PromiseComponent } from './promise/promise.component';

const routes: Routes = [
  { path: '', component: ParentComponent },
  { path: 'child', component: ChildComponent },
  { path: 'jquery', component: JqueryDemoComponent },
  { path: 'countDown', component: CountDownComponent },
  { path: 'promise', component: PromiseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
