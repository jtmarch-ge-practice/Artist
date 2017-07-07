import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'artists-page',
  templateUrl: 'src/pages/artists/artists.html'
})
export class ArtistsPage {
  
  constructor(public navCtrl: NavController) {
  
  }
  
}
