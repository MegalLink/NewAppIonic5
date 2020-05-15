import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../environments/environment'
import { RespuestaTopHeadLines } from '../interfaces/interfaces';

const apiKey=environment.apiKey;
const apiUrl="https://newsapi.org/v2";
const headers=new HttpHeaders({
  'X-Api-Key':apiKey
});
@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  
  constructor(private http:HttpClient) {  }

  private ejecutarQuery(query:string){
    return this.http.get<RespuestaTopHeadLines>(`${apiUrl}${query}`,{headers})
  }
  getTopHeadLines(){
      return this.ejecutarQuery(`/top-headlines?country=us`)
     // return this.http.get<RespuestaTopHeadLines>(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${environment.apiKey}`)


  }
  getTopHeadLinesCategory(category:string){
    return this.ejecutarQuery(`/top-headlines?country=us&category=${category}`)
  }




}
