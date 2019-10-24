import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Underwater Photos';
  image1 = 'http://petslady.com/sites/default/files/inline-images/squid.JPG';
  image2 = 'https://answeritsa.files.wordpress.com/2012/10/dolphin-scare.jpg';
  image3 = 'https://i.imgur.com/cLNJvhs.jpg';

  constructor() { }

  ngOnInit() {
  }

}