import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reservation-success',
  templateUrl: './reservation-success.component.html'
})
export class ReservationSuccessComponent implements OnInit {

  reservationId!: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.reservationId = params['reservationId'];
      console.log('Reservation ID:', this.reservationId);
    });
  }
}
