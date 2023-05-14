import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  
  // movies:any[]=[];

  // constructor(private movieService:MovieService,private router:Router){}
  constructor() { }

  ngOnInit(): void {
    
  }
  
  // ngOnInit(): void {
  //   this.movieService.getTrending().subscribe((resp:any)=>{
  //     console.log(resp.results);
  //     this.movies = resp.results;
  //   })
  // }

    // clickMovie(movieId:number){
    //   // console.log("Pelicula cliqueada",movieId);
    //   this.router.navigate(['movie',movieId]);
  }

// }
