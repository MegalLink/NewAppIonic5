import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Article } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {
public noticias:Article[]=[];
  constructor(private storage:Storage) {
this.cargarFavoritos();
   }
   guardarNoticia(noticia:Article){
     const existe=this.noticias.find(not=>not.title===noticia.title);
     if(!existe){
      this.noticias.unshift(noticia);
      this.storage.set('favoritos',this.noticias);
     }
  
   }
  async cargarFavoritos(){
      const favoritos = await this.storage.get('favoritos')
      if(favoritos){ //sino retorna null y despues no se puede guardar cuando esta vacia la db
        this.noticias=favoritos;
      }
    
   }
}
