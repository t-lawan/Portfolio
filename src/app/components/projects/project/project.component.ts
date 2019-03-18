import { Component, OnInit } from '@angular/core';
import { IProject } from '../../../interfaces/IProject';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../../services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  project: IProject;
  constructor(private route: ActivatedRoute, private projectService: ProjectService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.project = this.projectService.getProject(id);
  }

}
