import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-about-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './about-form.component.html',
  styleUrl: './about-form.component.scss'
})
export class AboutFormComponent {

  aboutForm!: FormGroup;

  constructor(){}

  ngOnInit(){
    this.aboutForm = new FormGroup({
      subtitle: new FormControl(),
      title: new FormControl(),
      description: new FormControl(),
      image: new FormControl(),
    })
  }

  register(){
    console.log(this.aboutForm.value)
  }

}
