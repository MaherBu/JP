import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginComponent } from 'src/app/modules/auth/components/login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public route: ActivatedRoute, private router: Router) {
  }
  navigateToChild() {
    //this.router.navigateByUrl('login');
    this.router.navigate(['/login']);
  
}

  ngOnInit(): void {
  }

}
