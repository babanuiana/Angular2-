import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MoviesComponent } from './components/moviesPage/moviesPage.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { MoviesModule } from './components/lessons/lessons.module';

@NgModule({
  declarations: [AppComponent, MoviesComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
