import { Injectable } from '@angular/core';
import { IProject } from '../interfaces/IProject';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: IProject[] = [
    {
      id: 'compare_yourself',
      title: 'Compare Yourself App',
      description: 'This is an app I built using React following a Udemy Course. This is hosted on AWS S3 and utilises a Google Firebase for authentication and database storage.',
      github_url: 'string',
      url: 'http://compare-yourself.akinsola.net/'
    }
  ]
  constructor() { }

  getAllProjects = (): IProject[] => {
    return this.projects;
  }

  getProject = (id: string): IProject => {
    return this.projects.find((project) => {
      return project.id === id;
    });
  }
}
