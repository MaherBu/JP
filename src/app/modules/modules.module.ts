import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulesRoutingModule } from './modules-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { TraderhomeComponent } from './trader-modules/traderhome/traderhome.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { TraderMatCardComponent } from './components/trader-mat-card/trader-mat-card.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatGridListModule} from '@angular/material/grid-list';
import { TradersComponent } from './admin-modules/traders/traders.component';
import { RequestsComponent } from './admin-modules/requests/requests.component';
import { ReportsComponent } from './admin-modules/reportspage/reports.component';
import { BlacklistComponent } from './admin-modules/blacklist/blacklist.component';
import { AdminhomeComponent } from './admin-modules/adminhome/adminhome.component';
import { RequestDetailsComponent } from './admin-modules/request-details/request-details.component';
import { TraderDetailsComponent } from './admin-modules/trader-details/trader-details.component';
import { HeaderComponent } from './components/header/header.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { WidgetQuickProgressValueComponent } from './components/widget-quick-progress-value/widget-quick-progress-value.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { RouterModule } from '@angular/router';
import {MatRippleModule} from '@angular/material/core';
import { FlexModule, ExtendedModule } from '@angular/flex-layout';
import { NguCarouselModule } from '@ngu/carousel';
import { DashboardComponent } from './trader-modules/dashboard/dashboard.component';
import { WidgetQuickValueCenterComponent } from './components/widget-quick-value-center/widget-quick-value-center.component';
import { ProductsComponent } from './trader-modules/products/products.component';
import { CreateStoreComponent } from './trader-modules/create-store/create-store.component';
import { AddProductComponent } from './trader-modules/add-product/add-product.component';
import {MatSelectModule} from '@angular/material/select';

export const trRoutes =  [
  { path: 'dashboard',component: DashboardComponent, label: 'Profile' },
  { path: 'product',component: ProductsComponent, label: 'Products' },
  { path: 'create-store',component: CreateStoreComponent, label: 'Create Store' },

 ];
 
 export const adRoutes = [
  { path: 'traders',component: TradersComponent, label: 'Traders' },
  { path: 'requests',component: RequestsComponent, label: 'Requests' },
  { path: 'reports',component: ReportsComponent, label: 'Reports' },
  { path: 'blacklist',component: BlacklistComponent, label: 'Blacklist' },
 ]
 
@NgModule({
  declarations: [
    ProductsComponent,
    DashboardComponent,
    CreateStoreComponent,
    AddProductComponent,
    HomepageComponent,
    TraderhomeComponent,
    AdminhomeComponent,
    RequestsComponent,
    TradersComponent,
    ReportsComponent,
    BlacklistComponent,
    RequestDetailsComponent,
    TraderDetailsComponent,
    HeaderComponent,
    ProductItemComponent,
    TraderMatCardComponent,
    WidgetQuickProgressValueComponent,
    WidgetQuickValueCenterComponent,
    SideMenuComponent,

  ],
  imports: [
    ModulesRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatRadioModule,
    MatCheckboxModule,
    MatGridListModule,
    CommonModule,
    MatListModule,
    RouterModule,
    FlexModule,
    ExtendedModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    NguCarouselModule,
    MatSelectModule
  ],
  exports:[
    HomepageComponent,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatRadioModule,
    MatCheckboxModule,
    MatGridListModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
})

export class ModulesModule { }
