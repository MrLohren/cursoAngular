import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveRoutingModule } from './reactive-routing.module';
import { BasicPaceComponent } from './pages/basic-pace/basic-pace.component';
import { DynamicPaceComponent } from './pages/dynamic-pace/dynamic-pace.component';
import { SwitchesPaceComponent } from './pages/switches-pace/switches-pace.component';


@NgModule({
  declarations: [
    BasicPaceComponent,
    DynamicPaceComponent,
    SwitchesPaceComponent
  ],
  imports: [
    CommonModule,
    ReactiveRoutingModule
  ]
})
export class ReactiveModule { }
