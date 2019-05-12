import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FilmsComponent } from './components/films/films.component';
import { GamesComponent } from './components/games/games.component';
import { ProjectComponent } from './components/projects/project/project.component';
import { FilmComponent } from './components/films/film/film.component';
import { GameComponent } from './components/games/game/game.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'projects', component: ProjectsComponent, pathMatch: 'full'},
    {path: 'projects/:id', component: ProjectComponent,  pathMatch: 'full'},
    {path: 'videos', component: FilmsComponent, pathMatch: 'full'},
    {path: 'videos/:id', component: FilmComponent, pathMatch: 'full'},
    {path: 'games', component: GamesComponent, pathMatch: 'full'},
    {path: 'games/:id', component: GameComponent, pathMatch: 'full'},
    {path: '**', component: HomeComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
