import { Component } from '@angular/core';
import { BannerFormComponent } from './banner-form/banner-form.component';
import { AboutFormComponent } from './about-form/about-form.component';
import { ExperienceFormComponent } from './experience-form/experience-form.component';
import { EducationFormComponent } from './education-form/education-form.component';
import { ProjectFormComponent } from './project-form/project-form.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [ BannerFormComponent, AboutFormComponent, ExperienceFormComponent, EducationFormComponent, ProjectFormComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

}
