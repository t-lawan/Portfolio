import { Injectable } from '@angular/core';
import { IFilm } from '../interfaces/IFilm';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  private films: IFilm[] = [
    {
      id: 'mount_silver',
      title: 'Mount Silver',
      description: 'Music video directed and edited by myself for Master Of Inane Conversation (MIC)',
      video_url: 'https://player.vimeo.com/video/309781338',
      thumbnail_url: 'https://via.placeholder.com/150/e6f9ff/e6f9ff?Text=mount_silver'
    },
    {
      id: 'mount_silver_duplicate',
      title: 'Mount Silver',
      description: 'Music video directed and edited by myself for Master Of Inane Conversation (MIC)',
      video_url: 'https://player.vimeo.com/video/309781338',
      thumbnail_url: 'https://via.placeholder.com/150/e6f9ff/e6f9ff?Text=mount_silver'
    }
  ];
  constructor() { }

  getAllFilms = (): IFilm[] => {
    return this.films;
  }

  getFilm = (id: string): IFilm => {
    return this.films.find((film) => {
      return film.id === id;
    });
  }
}
