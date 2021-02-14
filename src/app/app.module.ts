import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './modules/auth/auth.module';
import { ModulesModule } from './modules/modules.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TraderProfileComponent } from './modules/admin-modules/trader-profile/trader-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    TraderProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AuthModule,
    ModulesModule,
    BrowserAnimationsModule,  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
