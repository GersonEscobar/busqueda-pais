import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})

export class CountriesService {

    private apiUrl: string = 'https://restcountries.com/v3.1';

    constructor(private http: HttpClient) { }

    searchCapital( term:string):Observable<Country[]>{
        /* retorna un observable de tipo Country */
        const url = `${this.apiUrl}/capital/${ term }`;
        return this.http.get<Country[]>( url )
        .pipe(
            catchError( error => {
                console.log(error);
                return of([])
            }) 
        );

    }

    searchRegion( term:string):Observable<Country[]>{
        /* retorna un observable de tipo Country */
        const url = `${this.apiUrl}/region/${ term }`;
        return this.http.get<Country[]>( url )
        .pipe(
            catchError( error => {
                console.log(error);
                return of([])
            }) 
        );

    }

    searchCountry( term:string):Observable<Country[]>{
        /* retorna un observable de tipo Country */
        const url = `${this.apiUrl}/name/${ term }`;
        return this.http.get<Country[]>( url )
        .pipe(
            catchError( error => {
                console.log(error);
                return of([])
            }) 
        );

    }
    
}