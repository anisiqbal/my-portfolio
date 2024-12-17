import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-education-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './education-form.component.html',
  styleUrl: './education-form.component.scss'
})
export class EducationFormComponent {

  educationForm!: FormGroup;

  constructor(){}

  ngOnInit(){
    this.educationForm= new FormGroup({
      image: new FormControl(),
      universityName: new FormControl(),
      universityDegree : new FormControl(),
      universityTenure: new FormControl(),
    })
  }

  register(){
    console.log(this.educationForm.value)
  }

}
