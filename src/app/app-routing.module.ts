import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {TestNewPComponent} from './test-new-p/test-new-p.component';


const routes: Routes = [
  {
    path : '',
    component: AppComponent
  },
  {
    path : 'erx',
    component: TestNewPComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
