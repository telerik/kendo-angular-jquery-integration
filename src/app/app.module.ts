import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { GridModule } from '@progress/kendo-angular-grid';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { OtherComponent } from './other.component';
import { TestDatePickerComponent } from './test-date-picker.component';
import { TestSliderComponent } from './test-slider.component';
import { TestSchedulerComponent } from './test-scheduler.component';
import { TestGridComponent } from './test-grid.component';

import '@progress/kendo-ui';

const appRoutes: Routes = [
  { path: 'other', component: OtherComponent },
  { path: 'k1-date-picker', component: TestDatePickerComponent },
  { path: 'k2-slider', component: TestSliderComponent },
  { path: 'k1-scheduler', component: TestSchedulerComponent },
  { path: 'k2-grid', component: TestGridComponent },
  { path: '', redirectTo: '/k1-date-picker', pathMatch: 'full' },
  { path: '**', component: TestDatePickerComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    OtherComponent,
    TestDatePickerComponent,
    TestSliderComponent,
    TestSchedulerComponent,
    TestGridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    GridModule,
    InputsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
