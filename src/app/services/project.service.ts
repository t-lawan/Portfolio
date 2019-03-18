import { Injectable } from '@angular/core';
import { IProject } from '../interfaces/IProject';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: IProject[] = [
    {
      id: 'contract',
      title: 'Contract App',
      description: 'This is a contract app',
      github_url: 'string',
      url: 'string'
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
