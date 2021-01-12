import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }
  signupClick(){
    this.router.navigate(["/trader"]);
  }
  backClick(){
    this.router.navigate(["/home"]);
  }
}
