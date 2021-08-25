import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjekatComponent } from './components/projekat/projekat.component';
import { SmerComponent } from './components/smer/smer.component';
import { GrupaComponent } from './components/grupa/grupa.component';

const routes: Routes = [
  {path: 'projekat', component: ProjekatComponent },
  { path: 'smer', component: SmerComponent },
  { path: 'grupa', component: GrupaComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
