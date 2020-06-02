import { Component, OnInit,Input } from '@angular/core';
import { Article } from 'src/app/interfaces/interfaces';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { DataLocalService } from 'src/app/services/data-local.service';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {
@Input() noticia:Article;
@Input() i:number;
@Input() enFavoritos;
mensaje="Agregar a Favoritos"
icono="star";
  constructor(private inAppBrowser:InAppBrowser,
    private actionSheetCtrl:ActionSheetController,
    private socialSharing:SocialSharing,
    private dataLocal:DataLocalService,
    public toastController: ToastController) { 
      
    }
    async presentToast(message) {
      const toast = await this.toastController.create({
        message: message,
        duration: 2000
      });
      toast.present();
    }
  ngOnInit() {
    if(this.enFavoritos){
      this.mensaje="Borrar de favoritos"
      this.icono="trash"
    }
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
          this.socialSharing.share(
            this.noticia.title,
            this.noticia.source.name,
            '',
            this.noticia.url
          );
        }
      }, 
      {
        text: this.mensaje,
        icon: this.icono,
        cssClass:'action-dark',
        handler: () => {
          if(this.enFavoritos){
            this.dataLocal.borrarNoticia(this.noticia)
            this.presentToast("Noticia Borrada");
          }else{
            this.dataLocal.guardarNoticia(this.noticia);
            this.presentToast("Noticia agregada a favoritos");
          }
         
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
