import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IFilm } from '../../../interfaces/IFilm';
import { FilmService } from '../../../services/film.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {
  film: IFilm;
  videoUrl: SafeUrl;
  constructor(private route: ActivatedRoute, private filmService: FilmService, private sanitiser: DomSanitizer) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.film = this.filmService.getFilm(id);
    this.videoUrl = this.sanitiser.bypassSecurityTrustResourceUrl(this.film.video_url);
    console.log(this.videoUrl)
  }



}
