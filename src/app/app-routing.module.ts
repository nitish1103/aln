import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAlnComponent } from './create-aln/create-aln.component';
import { HomeComponent } from './home/home.component';
import { ListAlnComponent } from './list-aln/list-aln.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'create-aln',
    component: CreateAlnComponent,
  },
  {
    path: 'aln',
    component: ListAlnComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
