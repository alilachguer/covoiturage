import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-fermer-compte',
  templateUrl: './fermer-compte.component.html',
  styleUrls: ['./fermer-compte.component.css']
})
export class FermerCompteComponent implements OnInit {

  private mail: string;

  users: Array<any>;
  result = this.user.result;
  constructor(private user: UserService) { }

  fermerCompte(){
    console.log("le mail: " + this.mail);
    
  }

  ngOnInit() {
    console.log("oninit appel getusersadmin")
    this.user.getUsersAdmin()
    .subscribe(res => {
      console.log("litse des users apres foreach: " + this.users);
      this.users = res;
      console.log("litse des users: " + this.users);
      for(let u of this.users){
        JSON.stringify(u);
      }
    });
  }

}
