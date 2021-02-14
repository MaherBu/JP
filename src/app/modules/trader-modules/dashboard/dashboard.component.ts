import {Component, OnInit} from '@angular/core';
import { dashboard, dashboardProgress } from 'src/app/models/dashboard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  cards = dashboard;
  cardsProgress = dashboardProgress;

  constructor() {
  }

  ngOnInit(): void {
  }

}
