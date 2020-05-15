import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';

import { Article } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
noticias:Article[]=[]

 categorias=['business','entertainment', 'general' ,'health' ,'science', 'sports', 'technology'];

  constructor(private noticiasS:NoticiasService) {}
  ngOnInit(){
   this.onGetArticles(this.categorias[0]);
  }

  cambioCategoria(e){
   
    this.onGetArticles(e.detail.value);
  }
  onGetArticles(categoria:string){
    this.noticias=[];
    this.noticiasS.getTopHeadLinesCategory(categoria).subscribe(resp=>{
      this.noticias.push(...resp.articles)
    })
  }


}
