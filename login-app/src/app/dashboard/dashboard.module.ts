import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from '../guards/auth-guard.service';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [HomeComponent, LayoutComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  providers: [AuthGuard]
})
export class DashboardModule { }
