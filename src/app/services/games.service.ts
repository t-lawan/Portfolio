import { Injectable } from '@angular/core';
import { IGame } from '../interfaces/IGame';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  private games: IGame[] = [
    {
      id: 'lymphocytes',
      title: 'Lymphocytes',
      description: 'video game made following Unity tutorial. written in C#',
      game_url: 'https://game.url',
      thumbnail_url: 'https://www.placecage.com/gif/400/400'
    }
  ];
  constructor() { }

  getAll = (): IGame[] => {
    return this.games;
  }

  getOne = (id: string): IGame => {
    return this.games.find((game) => {
      return game.id === id;
    });
  }
}
