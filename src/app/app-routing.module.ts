import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { EditComponent } from './edit/edit.component';
import { ProductCreationComponent } from './product-creation/product-creation.component';
const routes: Routes = [
{
  path: '',
  pathMatch: 'full',
  component: HomeComponent
},
{
  path: 'products',
  pathMatch: 'full',
  component: ProductsComponent,
  children: []
},
{
  path: 'new',
  pathMatch: 'full',
  component: ProductCreationComponent
},
{
  path: 'products/edit/:id',
  pathMatch: 'full',
  component: EditComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
