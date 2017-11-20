import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEditComponent } from './create-edit/create-edit.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProductlistComponent } from './productlist/productlist.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    component: LoginComponent,
    children:[]
  },
  {
    path:'dashboard',
    pathMatch:'full',
    component: DashboardComponent,
    children:[]
  },
  {
    path:'products',
    pathMatch:'full',
    component: ProductlistComponent,
    children:[]
  },
  {
    path:'modifyadd',
    pathMatch:'full',
    component: CreateEditComponent,
    children:[]
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
