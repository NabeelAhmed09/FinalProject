import { Component, OnInit } from '@angular/core';
// import { NavbarService } from '../shared/services/navbar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

// route : string = '/bh-admin';
currentRoute : string;
visible : boolean;



constructor(private _router: Router) {

  this.visible = false;  
}
  
  ngOnInit() {

    // this.currentRoute = this._router.url;
    // if(this.currentRoute === '/bh-admin') {
    //     this.visible = false;
    // }
    // else {
    //   this.visible = true;
   
  }
    // console.log(this.currentRoute);
 
  }

  
// }
