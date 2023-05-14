import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterDetailsComponent} from './character-details/character-details.component'; 
import { CharacterComponent } from './character.component';


const myComponents = [
    CharacterDetailsComponent,
    CharacterListComponent,
    CharacterComponent
];

@NgModule({
    declarations: [... myComponents],
    imports: [CommonModule, RouterModule, InfiniteScrollModule],
    exports: [... myComponents],
})
export class CharactersModule {}