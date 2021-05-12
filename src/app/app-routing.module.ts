import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './components/lista/lista.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path:'home', component: HomeComponent},
  { path:'editar/:id', component: HomeComponent},
  { path:'lista', component: ListaComponent},
  { path:'**', redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
