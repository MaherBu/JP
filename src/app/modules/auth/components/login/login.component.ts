import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public route: ActivatedRoute, private router: Router) { }
   public user:any={username: '',password: ''}
  getVal()
  {
    
  }

  login(){
    var user = ((document.getElementById("user") as HTMLInputElement).value);
    var pass = ((document.getElementById("pass") as HTMLInputElement).value);
    if(user == "admin" && pass == "admin"){
      this.router.navigate(["/admin"]);
    }
    else if(user == "tr" && pass == "tr"){
      this.router.navigate(["/trader"]);
    }

  }
  
  ngOnInit(): void {
  }
  backClick(){
    this.router.navigate(["/home"]);
  }
  signIn(){
    this.router.navigate(["/adminhome"]);
  }
  signUp(){
    this.router.navigate(["/register"]);
  }
}
