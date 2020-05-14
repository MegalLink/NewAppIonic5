import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment'
import { RespuestaTopHeadLines } from '../interfaces/interfaces';
@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  
  constructor(private http:HttpClient) { 

  }
  getTopHeadLines(){
      //https://newsapi.org/v2/top-headlines?country=us&apiKey=8aadbadef56e4537acccede1a7b11df9
      return this.http.get<RespuestaTopHeadLines>(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${environment.apiKey}`)



  }




}
