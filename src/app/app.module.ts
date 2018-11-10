import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TotalBarComponent } from './total-bar/total-bar.component'

const appRoutes: Routes = [
  { path: 'home', component: TotalBarComponent },
  { path: '**', component: TotalBarComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TotalBarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
