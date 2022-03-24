import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventarioComponent } from './components/inventario/inventario.component';
import { MantenimientoComponent } from './components/mantenimiento/mantenimiento.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { HomeComponent } from './public/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo: '/home'
  },
  {
    path:'ventas',
    component: VentasComponent
  },
  {
    path: 'mantenimiento',
    component: MantenimientoComponent
  },
  {
    path: 'inventario',
    component: InventarioComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
