import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormLocalVariableComponent } from './components/form-local-variable/form-local-variable.component';

const routes: Routes = [
  {
    path: 'form-local-variable',
    component: FormLocalVariableComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
