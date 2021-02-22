import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { navRouter } from 'src/app/app-routing.module';

@Component({
  selector: 'app-column-one',
  templateUrl: './column-one.component.html',
  styleUrls: ['./column-one.component.css']
})
export class ColumnOneComponent implements OnInit {

  constructor(private _router: Router){}

  _navRouter = navRouter;
  
  ngOnInit(): void {
  }
  hasRoute(route: string) {
    return this._router.url.includes(route);
  }
}
