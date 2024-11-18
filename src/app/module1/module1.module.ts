import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Modulo1Component } from './module1.component';
import { Modulo1RoutingModule } from './module1-routing.module';

@NgModule({
  declarations: [Modulo1Component],
  imports: [CommonModule, Modulo1RoutingModule],
})
export class Modulo1Module {

}
