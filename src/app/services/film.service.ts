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
      thumbnail_url: 'https://www.placecage.com/gif/400/400'
    },
    {
      id: 'david_in_switzerland',
      title: 'Happy Birthday David',
      description: 'David celebrates his 25th orbit around the sun.',
      video_url: 'https://player.vimeo.com/video/172254952',
      thumbnail_url: 'https://www.placecage.com/gif/400/400'
    },
    {
      id: 'no_longer_real',
      title: 'No Longer Real',
      description: 'A video I started in 2018',
      video_url: 'https://player.vimeo.com/video/325285352',
      thumbnail_url: 'https://www.placecage.com/gif/400/400'
    },
    {
      id: 'start_v1',
      title: 'Start_V1',
      description: 'A video I started to make in 2016',
      video_url: 'https://player.vimeo.com/video/210942778',
      thumbnail_url: 'https://www.placecage.com/gif/400/400'
    }
  ];
  constructor() { }

  getAll = (): IFilm[] => {
    return this.films;
  }

  getOne = (id: string): IFilm => {
    return this.films.find((film) => {
      return film.id === id;
    });
  }
}
