import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'COVOITURAGE';

  auth_opened = false;
  ins_opened = false;
  
  changeAuthStatus(){
    if(this.auth_opened == false)
      this.auth_opened = true;
    else
      this.auth_opened = false;
    console.log("auth:", this.auth_opened);
  }

  changeInsStatus(){
    if(this.ins_opened == false)
      this.ins_opened = true;
    else
      this.ins_opened = false;
      console.log("ins:", this.ins_opened);
  }

  constructor() { }

  ngOnInit() {
  }

}
