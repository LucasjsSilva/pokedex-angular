import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './components/loading/loading.component';



@NgModule({
  declarations: [
    LoadingComponent
  ],
  exports: [
    LoadingComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
