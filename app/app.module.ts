import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { HistComponent } from './hist/hist.component';
import { NewComponent } from './new/new.component';
import { ContComponent } from './cont/cont.component';
import { RouterModule } from '@angular/router';
import { MapsComponent } from './maps/maps.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MapComponent,
    HistComponent,
    NewComponent,
    ContComponent,
    MapsComponent
  ],

  imports: [
    RouterModule.forRoot([
      { path: 'new', component: NewComponent },
      { path: 'cont', component: ContComponent},
      { path: 'hist', component: HistComponent},
      { path: 'cont', component:ContComponent},
      { path: 'map', component:MapComponent},
      { path: '*', component: AppComponent },
      { path: 'home', component: HomeComponent},
      { path: 'maps', component: MapsComponent},
    ])
  ],

  exports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
