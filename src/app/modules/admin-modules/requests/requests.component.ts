import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Trader } from 'src/app/models/trader';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {
  item1: Trader = {
    id:1,
    firstname:"Maher",
    lastname:'bunni',
    address:'ss',
    birth:'10/1/2020',
    email:'maher@gmail.com',
    nationality:'syr',
    password:'123',
    phoneNumber:'0000',
    username:'Maher1010'
  }
  item2: Trader = {
    id:2,
    firstname:"Adel",
    lastname:'KH',
    address:'ss',
    birth:'10/1/2020',
    email:'adel@gmail.com',
    nationality:'syr',
    password:'123',
    phoneNumber:'0000',
    username:'Adel2020'
  }

  public items : Trader[] = [];
  
  constructor(private route: Router) { 
  }

  ngOnInit() { 
    this.items.push(this.item1);
    this.items.push(this.item2);
    this.items.push(this.item2);
    this.items.push(this.item2);
    this.items.push(this.item2);

   }

   detailsPage(){
    this.route.navigateByUrl("/request-details")
   }
   delete(i : Trader){
    var index = this.items.indexOf(i);
    this.items.splice(index,1);  
  }

}
