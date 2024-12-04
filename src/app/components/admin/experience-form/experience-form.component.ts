import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-experience-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './experience-form.component.html',
  styleUrl: './experience-form.component.scss'
})
export class ExperienceFormComponent {

  experienceForm!: FormGroup;

  constructor(){}

  ngOnInit(){
    this.experienceForm= new FormGroup({
      image: new FormControl(),
      designation: new FormControl(),
      comapnyName: new FormControl(),
      tenure: new FormControl(),

    })

  }

  register(){
    console.log(this.experienceForm.value)
  }

}
