import { ActivatedRoute } from "@angular/router";

export class HotelCityComponent {
    city!: string;
    data: any = {
        rome: {
            title: 'Rome Hotel',
            image: 'assets/images/room.jpg',
            rooms: [
                { name: 'Single Room', price: 120 },
                { name: 'Double Room', price: 180 }
            ]
        },
        paris: {
            title: 'Rome Hotel',
            image: 'assets/images/room.jpg',
            rooms: [
                { name: 'Classic Room', price: 150 },
                { name: 'Uxury Room', price: 250 }
            ]
        },
        newyourk: {
            title: 'Rome Hotel',
            image: 'assets/images/newyork.jpg',
            rooms: [
                { name: 'Standard', price: 200 },
                { name: 'Suite', price: 350 }
            ]
        }
    };
    currentCity: any;
    constructor(private route: ActivatedRoute) { }
    ngOnInt() {
        this.city = this.route.snapshot.paramMap.get('city')!;
        this.currentCity = this.data[this.city];
    }
}