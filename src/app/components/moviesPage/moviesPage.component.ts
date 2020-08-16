import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'movies-page',
  templateUrl: './moviesPage.component.html',
  styleUrls: ['./moviesPage.component.sass'],
})

export class MoviesComponent implements OnInit {

    ngOnInit() {
        console.log('this is a component');      
    }

}
