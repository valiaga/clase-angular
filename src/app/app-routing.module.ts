import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormLocalVariableComponent } from './components/form-local-variable/form-local-variable.component';
import { FormStateObjectComponent } from './components/form-state-object/form-state-object.component';
import { TabsTestComponent } from './components/tabs-test/tabs-test.component';
import { ChangeDetectionStrategyComponent } from './components/change-detection-strategy/change-detection-strategy.component';

const routes: Routes = [
  {
    path: 'form-local-variable',
    component: FormLocalVariableComponent,
  },
  {
    path: 'form-state-object',
    component: FormStateObjectComponent,
  },
  {
    path: 'tabs-test',
    component: TabsTestComponent,
  },
  {
    path: 'change-detection-strategy',
    component: ChangeDetectionStrategyComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
