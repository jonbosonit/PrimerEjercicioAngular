import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarComponent } from './editar/editar.component';
import { ListaPersonaComponent } from './lista-persona/lista-persona.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {path: 'lista_persona', component: ListaPersonaComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'editar/:id', component: EditarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
