import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { UtilitiesComponent } from './utilities/utilities.component';
import { EnrollmentComponent } from './enrollment/enrollment.component';
import { BreathalyzerComponent } from './breathalyzer/breathalyzer.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'menu', component: MenuComponent, canActivate: [AuthGuard] },
  { path: 'utilities', component: UtilitiesComponent, canActivate: [AuthGuard] },
  { path: 'enrollment', component: EnrollmentComponent, canActivate: [AuthGuard] },
  { path: 'breathalyzer', component: BreathalyzerComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
