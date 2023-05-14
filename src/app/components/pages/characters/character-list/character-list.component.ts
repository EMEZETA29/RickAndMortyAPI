import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, ParamMap, Router } from '@angular/router';
import { filter, take } from 'rxjs/operators';
import { Character } from 'src/app/shared/interfaces/character.interface';
import { CharacterService } from 'src/app/shared/services/character.service';

// import { ActivatedRoute, Router } from '@angular/router';
// import { MovieService } from 'src/app/services/movie.service';
// import { environment } from 'src/environments/environment';
type RequestInfo = {
  next: string;
};

// const url_img = environment.URL_IMG;

@Component({
  // selector: 'app-movie',
  // templateUrl: './movie.component.html',
  // styleUrls: ['./movie.component.css']
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css'],
})
// export class MovieComponent implements OnInit {
  export class CharacterListComponent implements OnInit{
    characters: Character[] = [];

    info: RequestInfo = {
      next: null,
    };

    showGoUpButton = false;
    private pageNum=1;
    private query: string;
    private hideScrollHeight = 200;
    private showScrollHeight = 500;

    constructor(
      @Inject(DOCUMENT) private document:Document,
      private characterSvc: CharacterService,
      private route:ActivatedRoute,
      private router: Router
    ) {
      this.onUrlChanged();
    }

    ngOnInit(): void {
      this.getCharactersByQuery();
    }

    onScrollDown():void{
      this.getCharactersByQuery();
    }

    @HostListener('window:scroll', [])
    onWindowScroll():void{
      const yOffSet = window.pageYOffset;
      if((yOffSet || this.document.documentElement.scrollTop || this.document.body.scrollTop) > this.showScrollHeight ){
        this.showGoUpButton = true;
      }else if(this.showGoUpButton && (yOffSet || this.document.documentElement.scrollTop || this.document.body.scrollTop) < this.hideScrollHeight){
       this.showGoUpButton = false;
    }

    }

    onScrollTop():void{
      this.document.body.scrollTop =0;
      this.document.documentElement.scrollTop =0;
    }

    private onUrlChanged(): void{
      this.router.events
        .pipe(filter((event) => event instanceof NavigationEnd))
        .subscribe(() => {
          this.characters=[];
          this.pageNum = 1;
          this.getCharactersByQuery();
        });
    }
    private getCharactersByQuery(): void {
      this.route.queryParams.pipe(take(1)).subscribe((params: ParamMap) => {
        this.query = params['q'];
        this.getDataFromService();
      });
    }

    private getDataFromService(): void{
      this.characterSvc
        .searchCharacters(this.query, this.pageNum)
        .pipe(take(1))
        .subscribe((res: any) => {
          if (res?.results?.length) {
            const { info, results } = res;
            this.characters = [... this.characters, ... results];
            this.info = info;
          } else {
            this.characters = [];
          }
        });
      }
  }


  // movieId:any;
  // url_backdrop_img:string="";
  // url_poster_img:string="";
  // movie:any;
  // generos:string="";
  // crews:any[]=[];

//   constructor(
//     private activatedRoute:ActivatedRoute,
//     private router:Router,
//     private movieService:MovieService
//     ){}
  
//   ngOnInit(): void {

//     this.activatedRoute.params.subscribe(resp=>{
//       console.log(resp['id']);
//       this.movieId = resp['id'];
//       if(!resp['id']){
//         this.router.navigate(['']);
//       }
//       this.movieService.getMovieDetail(this.movieId).subscribe((resp:any)=>{
//         console.log(resp);
//         this.movie = resp;
//         this.url_backdrop_img = `${url_img}${resp.backdrop_path}`
//         // console.log(this.url_backdrop_img);
//         this.url_poster_img = `${url_img}${resp.poster_path}`
//         let arrGen = resp.genres;
//         var generos =arrGen.map((x:any)=>x.name).join(',');
//         this.generos = generos;
//       });

//       this.movieService.getMovieCredits(this.movieId).subscribe((resp:any)=>{
//         console.log(resp);
//         this.crews = resp.crew.filter(function(el:any){
//           return el.job=="Director" || el.job=="Writer" || el.job=="Characters"
//         })

//         console.log(this.crews);
      
//     });
  
  
//   })
//   }
// }
