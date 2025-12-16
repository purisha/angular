import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})

export class HotelsComponent {
  images = [
    {
      src: "assets/images/gallery/rome1.jpg",
      title: "ROME 1",
      des: "Trevi Foution"
    },
    {
      src: "assets/images/gallery/rome2.jpg",
      title: "ROME 2",
      des: "Pntheon"

    },
    {
      src: "assets/images/gallery/rome3.jpg",
      title: "ROME 3",
      des: "Vatican Mesume"
    },
    {
      src: "assets/images/gallery/rome0.jpg",
      title: "ROME 4",
      subtitle: "Vatican Mesume"
    }, {
      src: "assets/images/gallery/rome5.jpg",
      title: "ROME 5",
      subtitle: "Vatican Mesume"
    }, {
      src: "assets/images/gallery/new1.jpg",
      title: "New-York 1",
      subtitle: "St. Patrick's Cathedral"
    },
    {
      src: "assets/images/gallery/new2.jpg",
      title: "New-York 2",
      subtitle: "Corona Park"
    },
    {
      src: "assets/images/gallery/new6.jpg",
      title: "New-York 3",
      subtitle: "Brooklyn Bridge"
    },

  ];

}
