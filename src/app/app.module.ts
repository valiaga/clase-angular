import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
// import { CommonModule  } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormLocalVariableComponent } from './components/form-local-variable/form-local-variable.component';
import { FormStateObjectComponent } from './components/form-state-object/form-state-object.component';
import { LesTabGroupComponent } from './shared/tabs/tabs.component';
import { TabsTestComponent } from './components/tabs-test/tabs-test.component';
import { ChangeDetectionStrategyComponent } from './components/change-detection-strategy/change-detection-strategy.component';
import { ChildsComponent } from './components/change-detection-strategy/childs/childs.component';
import { NgTemplateTestComponent } from './components/ng-template-test/ng-template-test.component';
import { NgTemplateTest2Component } from './components/ng-template-test-2/ng-template-test-2.component';
import { ContainerTestComponent } from './components/ng-template-test-2/container-test/container-test.component';
import { ContainerTest3Component } from './components/ng-template-test-3/container-test3/container-test3.component';
import { NgTemplateTest3Component } from './components/ng-template-test-3/ng-template-test-3.component';
import { ContainerList3Component } from './components/ng-template-test-3/container-list3/container-list3.component';
import { Card3Directive } from './components/ng-template-test-3/card3.directive';
import { List3Directive } from './components/ng-template-test-3/list3.directive';

@NgModule({
  declarations: [
    AppComponent,
    FormLocalVariableComponent,
    FormStateObjectComponent,
    LesTabGroupComponent,
    TabsTestComponent,
    ChangeDetectionStrategyComponent,
    ChildsComponent,
    NgTemplateTestComponent,
    NgTemplateTest2Component,
    ContainerTestComponent,
    ContainerTest3Component,
    NgTemplateTest3Component,
    ContainerList3Component,
    Card3Directive,
    List3Directive,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // CommonModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
