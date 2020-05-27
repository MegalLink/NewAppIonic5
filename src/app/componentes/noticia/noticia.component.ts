import { Component, OnInit,Input } from '@angular/core';
import { Article } from 'src/app/interfaces/interfaces';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController } from '@ionic/angular';
@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {
@Input() noticia:Article;
@Input() i:number;
  constructor(private inAppBrowser:InAppBrowser,
    private actionSheetCtrl:ActionSheetController) { }

  ngOnInit() {
    
  }

  abrirNoticia(){
    // console.log(this.noticia.url)
   this.inAppBrowser.create(this.noticia.url);
  }
  


  async lanzarMenu() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Noticias',
      cssClass: 'header-menu',
      buttons: [
         {
        text: 'Compartir',
        icon: 'share',
        cssClass:'action-dark',
        handler: () => {
          console.log('Share clicked');
        }
      }, 
      {
        text: 'Agregar a Favoritos',
        icon: 'star',
        cssClass:'action-dark',
        handler: () => {
          console.log('Play clicked');
        }
      },
       {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        cssClass:'action-dark',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
}
