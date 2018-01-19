import { Component, OnInit } from '@angular/core';
import { TrajetServiceService} from './../trajet-service.service';

import { ActivatedRoute, RouterModule, Routes, Router } from '@angular/router';


@Component({
  selector: 'app-trajet',
  templateUrl: './trajet.component.html',
  styleUrls: ['./trajet.component.css']
})
export class TrajetComponent implements OnInit {


  private depart: string; 
  private arrivee: string;
  private date: Date;
  private maxprix: number;

  datetime = new Date();

  private trajets = [];

  constructor(private trajet: TrajetServiceService, router: Router) { }

  chercherTrajet(){
    let param = this.depart+"/"+this.arrivee+"/"+this.date+"/"+this.maxprix;
    this.trajet.chercherTrajet(param).subscribe(res => this.trajets = res);
  }

  ngOnInit() {
  
  }

}
