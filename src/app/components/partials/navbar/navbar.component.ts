import { Component, OnInit } from '@angular/core';
import { IHeader } from '../../../interfaces/IHeader';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  private headers :IHeader[] = [
    {
      link: 'projects',
      title: 'projects'
    },
    {
      link: 'videos',
      title: 'videos'
    },
    {
      link: 'games',
      title: 'games'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
