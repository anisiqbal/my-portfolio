import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-banner-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './banner-form.component.html',
  styleUrl: './banner-form.component.scss'
})
export class BannerFormComponent {

  bannerForm!: FormGroup;

  constructor(){}

  ngOnInit(){
    this.bannerForm= new FormGroup({
      title: new FormControl(),
      subtitle: new FormControl(),
      image: new FormControl(),
    })
  }

  register(){
    console.log(this.bannerForm.value)
  }

}
