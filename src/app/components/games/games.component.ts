import { Component, OnInit } from '@angular/core';
import { IGame } from '../../interfaces/IGame';
import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  games: IGame[];
  constructor( private gameServices: GamesService) { }

  ngOnInit() {
    this.games = this.gameServices.getAll();
  }

}
