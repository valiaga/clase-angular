import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormLocalVariableComponent } from './components/form-local-variable/form-local-variable.component';
import { FormStateObjectComponent } from './components/form-state-object/form-state-object.component';
import { TabsTestComponent } from './components/tabs-test/tabs-test.component';
import { ChangeDetectionStrategyComponent } from './components/change-detection-strategy/change-detection-strategy.component';
import { NgTemplateTestComponent } from './components/ng-template-test/ng-template-test.component';
import { NgTemplateTest2Component } from './components/ng-template-test-2/ng-template-test-2.component';
import { NgTemplateTest3Component } from './components/ng-template-test-3/ng-template-test-3.component';

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
  },
  {
    path: 'ng-template-test',
    component: NgTemplateTestComponent,
  },
  {
    path: 'ng-template-test-2',
    component: NgTemplateTest2Component,
  },
  {
    path: 'ng-template-test-3',
    component: NgTemplateTest3Component,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
