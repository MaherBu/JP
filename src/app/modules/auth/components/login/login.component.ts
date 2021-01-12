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
  // public user:any={username: '',password: ''}


  // onKey(event: any) { // without type info
  //   if(this.username == "admin" && this.password == "admin"){
  //     // this.values += event.target.value + ' | ';
  //     //this.router.navigateByUrl('adminhome');
  //     this.signIn();
  //   }
  //   else{
  //     alert("Invalid");
  //   }
  // }

  getVal()
  {
    
  }

  login(){
    var user = ((document.getElementById("user") as HTMLInputElement).value);
    var pass = ((document.getElementById("pass") as HTMLInputElement).value);
    if(user == "admin" && pass == "admin"){
      this.router.navigate(["/admin"]);
    }
    else{
      alert("Invalid");
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
}
