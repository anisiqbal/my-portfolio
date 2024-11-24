import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class EducationService {

  baseUrl: string = "https://portfolio-app-b805f-default-rtdb.firebaseio.com"

  constructor(

    private http : HttpClient
  ) { }
 
  getEducationService(){
    const apiUrl = `${this.baseUrl}/education.json`
    return this.http.get(apiUrl);
  }

}
