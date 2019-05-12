import { Component, OnInit } from '@angular/core';
import { FilmService } from '../../services/film.service';
import { IFilm } from '../../interfaces/IFilm';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {
  films: IFilm[];
;  constructor( private filmService: FilmService) { }

  ngOnInit() {
    this.films = this.filmService.getAll();
  }

}
