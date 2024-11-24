import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  baseUrl: string = "https://portfolio-app-b805f-default-rtdb.firebaseio.com"

  constructor(

    private http : HttpClient
  ) { }

  getExperienceService(){

    const apiUrl = `${this.baseUrl}/experience.json`
    return this.http.get(apiUrl);
  }
}
