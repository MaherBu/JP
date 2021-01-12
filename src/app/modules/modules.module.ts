import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulesRoutingModule } from './modules-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { TraderhomeComponent } from './traderhome/traderhome.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AddProductComponent } from './add-product/add-product.component';
import { TraderProfileComponent } from './trader-profile/trader-profile.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { TradersComponent } from './traders/traders.component';
import { RequestsComponent } from './requests/requests.component';
import {MatCardModule} from '@angular/material/card';
import { TraderMatCardComponent } from './components/trader-mat-card/trader-mat-card.component';
import { ReportsComponent } from './reportspage/reports.component';
import { BlacklistComponent } from './blacklist/blacklist.component';

export const trRoutes =  [
  { path: 'product',component: AddProductComponent, label: 'Add Product' },
  { path: 'profile',component: TraderProfileComponent, label: 'Profile' },
 ];
 
 export const adRoutes = [
  { path: 'traders',component: TradersComponent, label: 'Traders' },
  { path: 'requests',component: RequestsComponent, label: 'Requests' },
  { path: 'blacklist',component: BlacklistComponent, label: 'Blacklist' },
  { path: 'reports',component: ReportsComponent, label: 'Reports' },
 ]
 
@NgModule({
  declarations: [
    HomepageComponent,
    TraderhomeComponent,
    AdminhomeComponent,
    RequestsComponent,
    TradersComponent,
    TraderMatCardComponent,
    ReportsComponent,
    BlacklistComponent
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule
  ],
  exports:[
    HomepageComponent,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
  ],
})

export class ModulesModule { }
