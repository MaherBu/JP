import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { stores } from 'src/app/models/static-data/store';

@Component({
  selector: 'app-stores-page',
  templateUrl: './stores-page.component.html',
  styleUrls: ['./stores-page.component.css']
})
export class StoresPageComponent implements OnInit {

  stores = stores;
  constructor(private router: Router) { }

  ngOnInit(): void {}

}
