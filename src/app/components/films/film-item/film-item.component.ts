import { Component, OnInit, Input } from '@angular/core';
import { IFilm } from '../../../interfaces/IFilm';

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.scss']
})
export class FilmItemComponent implements OnInit {
  @Input() film: IFilm;
  constructor() { }

  ngOnInit() {
  }

}
