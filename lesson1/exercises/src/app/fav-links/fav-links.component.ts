import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks: string[] = ['https://unicode-table.com/en/#control-character', 'https://lc101stlaugust2019.slack.com/', 'https://learn.launchcode.org/courses/191'];
  constructor() { }

  ngOnInit() {
  }

}
