import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicPaceComponent } from './pages/basic-pace/basic-pace.component';
import { DynamicPaceComponent } from './pages/dynamic-pace/dynamic-pace.component';
import { SwitchesPaceComponent } from './pages/switches-pace/switches-pace.component';

const routes: Routes = [
  {
    path : '',
    children : [
      {path : 'basic', component : BasicPaceComponent},
      {path : 'dynamic', component : DynamicPaceComponent},
      {path : 'switches', component : SwitchesPaceComponent},
      {path : '**', redirectTo : 'basic' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveRoutingModule { }
