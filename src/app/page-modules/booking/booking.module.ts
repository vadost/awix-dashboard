import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { BookingComponent } from './booking.component';

@NgModule({
  imports: [
    CommonModule,
    BookingRoutingModule
  ],
  declarations: [BookingComponent]
})
export class BookingModule { }
