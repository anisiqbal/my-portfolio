import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project/project.service';


@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements OnInit {

  project: any={};

  constructor(
    private projectService: ProjectService,
  ){}

  ngOnInit(): void {
    this.getProject();
  }

  getProject(){
    this.projectService.getProjectService().subscribe((res: any)=>{
      console.log('project-data', res);

      this.project = Object.values(res)
      console.log(this.project);
    })
  }
}
