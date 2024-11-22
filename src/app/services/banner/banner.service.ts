import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  baseUrl: string = "https://portfolio-app-b805f-default-rtdb.firebaseio.com";

  constructor(
    private http: HttpClient
  ) { }

  getBannerData() {
    const apiUrl = `${this.baseUrl}/banner.json`;

    return this.http.get(apiUrl);
  }
}
