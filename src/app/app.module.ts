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

@NgModule({
  declarations: [
    AppComponent,
    FormLocalVariableComponent,
    FormStateObjectComponent,
    LesTabGroupComponent,
    TabsTestComponent,
    ChangeDetectionStrategyComponent,
    ChildsComponent,
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
