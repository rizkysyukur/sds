import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutServiceComponent } from './out-service.component';


@NgModule({
  declarations: [OutServiceComponent],
  imports: [
    CommonModule,
  ], exports: [OutServiceComponent]
})
export class OutServiceModule {

}
