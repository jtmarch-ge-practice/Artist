import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import {FormsModule} from '@angular/forms';

import {HttpModule} from '@angular/http';


//import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
//import { ArtistsPage } from '../pages/artists/artists';
//import {Artists} from "./app.component";


import { ArtistsComponent } from './components/artists.component';
import {ArtistlistService} from "./services/artistlist.service";
import {Artists} from "./app.component";
//import {HomePage} from "../pages/home/home";

@NgModule({
  declarations: [
    //MyApp,
    HomePage,
    //ArtistsPage,
    ArtistsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(ArtistsComponent),
    HttpModule
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    //MyApp,
    HomePage,
    //ArtistsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ArtistlistService
  ]
})
export class AppModule {}
