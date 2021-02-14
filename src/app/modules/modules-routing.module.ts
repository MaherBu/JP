import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminhomeComponent } from './admin-modules/adminhome/adminhome.component';
import { BlacklistComponent } from './admin-modules/blacklist/blacklist.component';
import { ReportsComponent } from './admin-modules/reportspage/reports.component';
import { RequestDetailsComponent } from './admin-modules/request-details/request-details.component';
import { RequestsComponent } from './admin-modules/requests/requests.component';
import { TraderDetailsComponent } from './admin-modules/trader-details/trader-details.component';
import { TradersComponent } from './admin-modules/traders/traders.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AddProductComponent } from './trader-modules/add-product/add-product.component';
import { CreateStoreComponent } from './trader-modules/create-store/create-store.component';
import { DashboardComponent } from './trader-modules/dashboard/dashboard.component';
import { ProductsComponent } from './trader-modules/products/products.component';
import { TraderhomeComponent } from './trader-modules/traderhome/traderhome.component';

const routes: Routes = [
  { 
    path:'home' ,
    component: HomepageComponent
  },
  { 
    path:'request-details' ,
    component: RequestDetailsComponent
  },
  { 
    path:'trader-details' ,
    component: TraderDetailsComponent
  },
  {
    path: 'admin',
    component: AdminhomeComponent,
    children:[
      {
        path:'traders',
        component:TradersComponent,
      },
      {
        path:'requests',
        component:RequestsComponent
      },
      {
        path:'reports',
        component:ReportsComponent
      },
      {
        path:'blacklist',
        component:BlacklistComponent
      },
    ]
  },
  { 
    path:'trader',
    component: TraderhomeComponent,
    children:[
      {
        path:'dashboard',
        component: DashboardComponent
      },
      {
        path:'product',
        component: ProductsComponent
      },
      {
        path:'add-product',
        component: AddProductComponent
      },
      {
        path:'create-store',
        component: CreateStoreComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
