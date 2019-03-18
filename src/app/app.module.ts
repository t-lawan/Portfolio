import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FilmComponent } from './components/films/film/film.component';
import { ProjectComponent } from './components/projects/project/project.component';
import { GameComponent } from './components/games/game/game.component';
import { NavbarComponent } from './components/partials/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { FilmsComponent } from './components/films/films.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { GamesComponent } from './components/games/games.component';
import { FilmService } from './services/film.service';
import { FilmItemComponent } from './components/films/film-item/film-item.component';
import { AlertComponent } from './components/alert/alert.component';
import { ProjectItemComponent } from './components/projects/project-item/project-item.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmComponent,
    ProjectComponent,
    GameComponent,
    NavbarComponent,
    HomeComponent,
    FilmsComponent,
    ProjectsComponent,
    GamesComponent,
    FilmItemComponent,
    AlertComponent,
    ProjectItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [FilmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
