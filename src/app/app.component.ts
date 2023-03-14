import { Component, OnInit } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-ecran2',
  templateUrl: './ecran2.component.html',
  styleUrls: ['./ecran2.component.css']
})
export class Ecran2Component implements OnInit {

  villes: any[] = [
    { pays: 'France', ville: 'Paris', population: '2.1 million', lat: 48.8566, lng: 2.3522 },
    { pays: 'Royaume-Uni', ville: 'Londres', population: '8.9 million', lat: 51.5074, lng: -0.1278 },
    { pays: 'Etats-Unis', ville: 'New York', population: '8.3 million', lat: 40.7128, lng: -74.0060 },
    { pays: 'Japon', ville: 'Tokyo', population: '13.5 million', lat: 35.6895, lng: 139.6917 },
    { pays: 'Australie', ville: 'Sydney', population: '5 million', lat: -33.8688, lng: 151.2093 }
  ];

  editedVille: any = null;

  constructor() { }

  ngOnInit() {
  }

  edit(ville: any) {
    this.editedVille = ville;
  }

  delete(ville: any) {
    const index = this.villes.indexOf(ville);
    if (index > -1) {
      this.villes.splice(index, 1);
    }
  }

  save() {
    if (this.editedVille) {
      const index = this.villes.indexOf(this.editedVille);
      if (index > -1) {
        this.villes[index] = this.editedVille;
      } else {
        this.villes.push(this.editedVille);
      }
      this.editedVille = null;

    }
  }
