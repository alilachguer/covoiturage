import { Component, OnInit } from '@angular/core';
import { TrajetServiceService} from './../trajet-service.service';
import { Http, Response } from '@angular/http';

import { ActivatedRoute, RouterModule, Routes } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-trajet',
  templateUrl: './admin-trajet.component.html',
  styleUrls: ['./admin-trajet.component.css']
})
export class AdminTrajetComponent implements OnInit {
  
  public trajets: Array<any>;

  title: string = "admin trajet";

  private depart: string; 
  private arrivee: string;
  private distance: number;
  private temps: number;

  private router: Router

  trajet_ajoute: Object;

  constructor(private trajet: TrajetServiceService, router: Router, private route: ActivatedRoute) { 
    this.router = router;
  }

  //fonction creer un nouveu trajet
  createTrajet(){
    console.log("depart:", this.depart, ", arrivee:", this.arrivee, ", dstance:", this.distance);
    this.trajet.creationTrajet(this.depart, this.arrivee, this.distance, this.temps)
      .subscribe(res => {
        this.trajet_ajoute = JSON.stringify(res);
        this.router.navigate(['/admin']);
        console.log("RESULTAT INSERTION: "+ (this.trajet_ajoute));
    });
  }

  ngOnInit() {
    this.trajet.getTrajets("admin")
    .subscribe(res => {
      this.trajets = res;
      console.log("litse des trajets: " + this.trajets);
      for(let t in this.trajets){
        JSON.stringify(this.trajets[t]);
      }
      
    });

  }

}
