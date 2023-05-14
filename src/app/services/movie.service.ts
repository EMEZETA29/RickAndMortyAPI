// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { environment } from 'src/environments/environment.development';

// const url = environment.URL;
// const api_key = environment.API_KEY;

// @Injectable({
//   providedIn: 'root'
// })
// export class MovieService {

//   constructor(private http:HttpClient) { }

//   getTrending(){
//     return this.http.get(`${url}/trending/movie/week?api_key=${api_key}&language=es`);
//   }

//   getMovieDetail(movieId:number){
//     return this.http.get(`${url}/movie/${movieId}?api_key=${api_key}&language=es`)
//   }

//   getMovieCredits(movieId:number){
//     return this.http.get(`${url}/movie/${movieId}/credits?api_key=${api_key}&language=es`)
//   }
// }
