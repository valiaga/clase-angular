import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormLocalVariableComponent } from './components/form-local-variable/form-local-variable.component';
import { FormStateObjectComponent } from './components/form-state-object/form-state-object.component';

const routes: Routes = [
  {
    path: 'form-local-variable',
    component: FormLocalVariableComponent,
  },
  {
    path: 'form-state-object',
    component: FormStateObjectComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
