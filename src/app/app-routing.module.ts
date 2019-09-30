import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'cliente', pathMatch: 'full' }/*primera pantalla a mostrar */,
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'cliente', loadChildren: './cliente/cliente.module#ClientePageModule' },
  { path: 'agregar-cliente', loadChildren: './agregar-cliente/agregar-cliente.module#AgregarClientePageModule' },
  { path: 'mostrar-cliente', loadChildren: './mostrar-cliente/mostrar-cliente.module#MostrarClientePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
