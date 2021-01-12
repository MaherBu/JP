import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { BlacklistComponent } from './blacklist/blacklist.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ReportsComponent } from './reportspage/reports.component';
import { RequestsComponent } from './requests/requests.component';
import { TraderProfileComponent } from './trader-profile/trader-profile.component';
import { TraderhomeComponent } from './traderhome/traderhome.component';
import { TradersComponent } from './traders/traders.component';

const routes: Routes = [
  { 
    path:'home' ,
    component: HomepageComponent
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
        path:'blacklist',
        component:BlacklistComponent
      },
      {
        path:'reports',
        component:ReportsComponent
      }
    ]
  },
  { 
    path:'trader',
    component: TraderhomeComponent,
    children:[
      {
        path:'product',
        component:AddProductComponent,
      },
      {
        path:'profile',
        component:TraderProfileComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
