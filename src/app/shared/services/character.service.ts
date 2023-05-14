import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from '../interfaces/character.interface';
import { environment } from '@environment/environment.prod';



@Injectable({
    providedIn: 'root'
})

export class CharacterService{

    constructor(private http: HttpClient) {}

    searchCharacters(query ='', page = 200) {
        const filter = `${environment.URL_RM}/?name=${query}&page=${page}`;
        return this.http.get<Character[]>(filter)
    }

    getDetails(id:number) {
        return this.http.get<Character>(`${environment.URL_RM}/${id}`);
    }
}
