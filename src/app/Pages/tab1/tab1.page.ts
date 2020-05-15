import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';

import { Article } from 'src/app/interfaces/interfaces';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
noticias:Article[]=[];
  constructor(private noticiasS:NoticiasService) {

  }
ngOnInit(){
  this.cargarNoticias();
}

loadData(event){
this.cargarNoticias(event);
}
cargarNoticias(event?){
  this.noticiasS.getTopHeadLines().subscribe((res)=>{

    //SI en la respuesta ya no me llega mas data cancelo el infinite scroll
    if(res.articles.length==0){
      event.target.disabled=true;
      event.target.complete();
      return;
    }
    this.noticias.push(...res.articles);
    if(event){
      event.target.complete();
    }
  })
}

}
