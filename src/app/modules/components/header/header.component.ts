import {Component, OnInit, Output} from '@angular/core';
import {EventEmitter} from '@angular/core';
import { Menu } from 'src/app/models/static-data/menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();
  menu = Menu;

  constructor() {
  }

  ngOnInit(): void {
  }

  onToggleSidenav(): void {
    this.sidenavToggle.emit();
  }
}
