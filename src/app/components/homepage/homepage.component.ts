import { Component, OnInit } from '@angular/core';
import { BannerService } from '../../services/banner/banner.service';
import { AboutService } from '../../services/about/about.service';
import { ExperienceService } from '../../services/experience/experience.service';


@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent implements OnInit {

  banner: any = {};
  about: any ={};
  experience: any ={};

  constructor(
    private bannerService: BannerService,
    private aboutService: AboutService,
    private experienceService: ExperienceService

  ) {}

  // get data automatically when my component loads
  ngOnInit(): void {
    this.getBanner();
    this.getAbout();
    this.getExperience();
  

  }

  getBanner() {
    this.bannerService.getBannerData().subscribe((res: any)=> {
      // response getting from server
      console.log(res);

      // convert object to array
      this.banner = Object.entries(res)[0][1];

      // print data after convert to array
      console.log(this.banner);
    })
  }

  getAbout(){
    this.aboutService.getAboutService().subscribe((res: any)=>{
      console.log('about-data', res);

      
      // convert object to array
      this.about = Object.entries(res)[0][1];

      // print data after convert to array
      console.log(this.about);
    })
  }

  getExperience(){
    this.experienceService.getExperienceService().subscribe((res: any)=>{
      console.log('experience-data', res);

      this.experience = Object.values(res)
      console.log(this.experience);
    })
  }
  

}
