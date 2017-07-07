import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ArtistlistService} from '../services/artistlist.service';
import {Artists} from "../app.component";

//import { HomePage } from '../pages/home/home';

//import {ArtistsPage} from '../pages/artists/artists';

@Component({
  selector: 'Artists',
  template: ` <h1>HelloWorld // French Quarter Fest Artists</h1>
  
  <hr />
  <h3>Artists</h3>
    <div *ngFor= "let artist of artists">
      
      <h3>{{artist.name}}</h3>
     
      
    </div>
`,
  
  providers: [ArtistlistService]
  
})




export class ArtistsComponent {
  
  //name = 'World';
  //rootPage:any = HomePage;
  
  artists: Artist[];        //create ArtistArrayInterface below
  
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private artistlistService: ArtistlistService, ) {
  
   
    
      platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  
    this.artistlistService.getArtists().subscribe(artists => {
      this.artistlistService = artists;
      console.log(artists)});
    
  } //end constructor
}// end export class ArtistComponent


interface Artist{
  id: number;
  name: string;  //title
  description: string;  //body
  
}

