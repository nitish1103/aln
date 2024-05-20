import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAlnComponent } from './create-aln/create-aln.component';
import { HomeComponent } from './home/home.component';
import { ListAlnComponent } from './list-aln/list-aln.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth.guard';
import { SubAlnComponent } from './sub-aln/sub-aln.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'create-aln',
    component: CreateAlnComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'aln',
    component: ListAlnComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'aln-sub',
    component: SubAlnComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
