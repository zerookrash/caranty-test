import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { TasksComponent } from './components/tasks/tasks.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TasksComponent,
    NavComponent,
    FooterComponent,
    AdminDashboardComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
})
export class AdminModule {}
