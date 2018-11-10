import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartModule } from 'primeng/chart';

import { AppComponent } from './app.component';
import { TotalBarComponent } from './total-bar/total-bar.component'
import { BetsComponent } from './bets/bets.component'

const appRoutes: Routes = [
  { path: 'home', component: TotalBarComponent },
  { path: 'bets', component: BetsComponent },
  { path: '**', component: TotalBarComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TotalBarComponent,
    BetsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ChartModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
