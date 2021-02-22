import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

export const routes =  [];

export const navRouter =  [];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
