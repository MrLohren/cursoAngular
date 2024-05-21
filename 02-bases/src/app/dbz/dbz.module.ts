import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { MainPageComponent } from "./pages/main-page.component";
import { ListComponent } from "./components/list/list.component";
import { CharFormComponent } from './components/char-form/char-form.component';

@NgModule({
  declarations : [
    MainPageComponent,
    ListComponent,
    CharFormComponent
  ],
  imports : [
    CommonModule,
    FormsModule
  ],
  exports : [
    MainPageComponent
  ]
})

export class DbzModule {}
