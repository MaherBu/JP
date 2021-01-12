import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-column-one',
  templateUrl: './column-one.component.html',
  styleUrls: ['./column-one.component.css']
})
export class ColumnOneComponent implements OnInit {

  constructor(private _router: Router){}

  ngOnInit(): void {
  }
  hasRoute(route: string) {
    return this._router.url.includes(route);
  }
}
