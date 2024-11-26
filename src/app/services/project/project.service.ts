import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class ProjectService {

  baseUrl: string = "https://portfolio-app-b805f-default-rtdb.firebaseio.com"

  constructor(

  private http : HttpClient

  ){ }
   
  getProjectService(){
    const apiUrl = `${this.baseUrl}/project.json`
    return this.http.get(apiUrl);
  }
  

}
