import { Component, OnInit } from '@angular/core';
import { BannerService } from '../../services/banner/banner.service';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent implements OnInit {

  banner: any = {};

  constructor(
    private bannerService: BannerService
  ) {}

  // get data automatically when my component loads
  ngOnInit(): void {
    this.getBanner();
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

}
