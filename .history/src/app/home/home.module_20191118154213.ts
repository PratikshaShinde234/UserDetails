import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableModule} from 'primeng/table';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {ButtonModule} from 'primeng/button';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ButtonModule,
    TableModule
  ]
})
export class HomeModule { }
