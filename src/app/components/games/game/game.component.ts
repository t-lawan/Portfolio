import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../../../services/games.service';
import { IGame } from '../../../interfaces/IGame';
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  game: IGame;
  gameInstance;

  constructor(private route: ActivatedRoute, private gameService: GamesService) { }
  ngOnInit() {
    // this.gameInstance = UnityLoader.instantiate("gameContainer", lymphocytes);

    const id = this.route.snapshot.paramMap.get('id');
    this.game = this.gameService.getOne(id);
  }

}
