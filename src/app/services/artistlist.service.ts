import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ArtistlistService {
  
  baseURL;
  constructor(private http: Http) {
  
    this.http = http;
    this.baseURL = 'http://fqfi.org/api/get/artists'
    console.log('ArtistlistService Initialized...')
  }//end constructor
  
  getArtists() {
    return this.http.get(this.baseURL)
      .map(res => res.json());
  }//end getArtists
}
