import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { IProject } from '../../interfaces/IProject';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: IProject[];
  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projects = this.projectService.getAllProjects();
  }

}
