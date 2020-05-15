import { Component, OnInit, ViewChild } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';

import { Article } from 'src/app/interfaces/interfaces';
import { IonSegment } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  @ViewChild(IonSegment) segment: IonSegment;
noticias:Article[]=[]

 categorias=['business','entertainment', 'general' ,'health' ,'science', 'sports', 'technology'];

  constructor(private noticiasS:NoticiasService) {}
  ngOnInit(){
   this.onGetArticles(this.categorias[0]);
  }

  cambioCategoria(e){
   this.noticias=[];
    this.onGetArticles(e.detail.value);
  }
  onGetArticles(categoria:string,event?){
    
    this.noticiasS.getTopHeadLinesCategory(categoria).subscribe(resp=>{
      this.noticias.push(...resp.articles)
      if(event){
        event.target.complete();
      }
    })
  }

  loadData(event){
    this.onGetArticles(this.segment.value,event);
  }
}
