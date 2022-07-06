import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { AuthGuard } from './guard/auth.guard';

const routes:Routes = [
  {
    path:'home', component: HomeComponent, title: 'Home'
  },
  {
    path:'admin', component: HomeComponent, title: 'Admin', canActivate: [ AuthGuard]
  },
  {
    path:'about', component: AboutComponent
  },
  {
    path:'dashboard', component: DashboardComponent
  },
  {
    path:'login', component: LoginComponent
  },
  {
    path:'', pathMatch: 'full', redirectTo:'/home'
  },
  {
    path: "**", component: NotfoundComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
