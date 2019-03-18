import { Component, OnInit, Input } from '@angular/core';
import { IProject } from '../../../interfaces/IProject';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {
  @Input() project: IProject;
  constructor() { }

  ngOnInit() {
  }

}
