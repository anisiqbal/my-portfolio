import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AboutService {

  baseUrl: string = "https://portfolio-app-b805f-default-rtdb.firebaseio.com"

  constructor(
    private http: HttpClient
  ) { }

  getAboutService(){
    ///// This sign is interpolation "${}" ///////
    const apiUrl = `${this.baseUrl}/about.json`
    return this.http.get(apiUrl);
  }
}
