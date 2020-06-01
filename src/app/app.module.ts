import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule } from '@angular/common/http'
import { ComponentesModule } from './componentes/componentes.module';



import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { IonicStorageModule } from '@ionic/storage';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule,ComponentesModule, IonicStorageModule.forRoot()],
  providers: [
    StatusBar,
    SplashScreen,InAppBrowser,SocialSharing,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}





//to lad changes ionic build then npx cap copy


//ionic cordova prepare android
//ionic cordova build android
//abrir en android studio la carpeta de platforms / android

//Para el live reload 
//ionic cordova run android --list
//ionic cordova run android --target=192.168.45.102:5555
////ionic cordova run android --target=192.168.45.102:5555 -l
//para ver lo de consola ir a google chrome herramientas desarrollo  more tools remote devices