import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservService } from '../services/reserve.service';
import { Router } from '@angular/router';


@Component({
    selector: 'app-hotel-reserve',
    templateUrl: './hotel-reserve.component.html',
    styleUrls: ['./hotel-reserve.component.css']
})
export class HotelReserveComponent implements OnInit {


    reserveForm!: FormGroup;
    constructor(
        private fb: FormBuilder,
        private reserveService: ReservService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.reserveForm = this.fb.group({
            fullName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            city: ['', Validators.required],
            checkIn: ['', Validators.required],
            checkOut: ['', Validators.required]
        });
    }

    submit() {
        console.log('submit called');
        if (this.reserveForm.invalid) {
            console.log('form invalid', this.reserveForm.value);
            return;
        }
        console.log('form invalid', this.reserveForm.value);
        if (this.reserveForm.invalid) return;

        this.reserveService.createReservation(this.reserveForm.value)
            .subscribe(
                (res: any) => {
                    console.log('Reservation success', res);
                    this.router.navigate(['/reservation-success'],
                        {
                            queryParams: { reservationId: res.reservationId }
                        });
                },
                (err) => {
                    console.error('Reservation failed', err);
                }
            );
    }
}
