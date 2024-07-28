import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrls: ['./by-country-page.component.css']
})
export class ByCountryPageComponent implements OnInit {

  public countries  : Country [] = [];
  public initialValue: string = ''

  constructor ( private countriesServie : CountriesService){

  }
  ngOnInit(): void {
    this.countries = this.countriesServie.cacheStorage.byCountries.countries;
    this.initialValue = this.countriesServie.cacheStorage.byCountries.term;
  }

  searchByCountry(term : string):void{
    this.countriesServie.searchCountry(term)
    .subscribe(countries => {
      this.countries = countries;
    })
  }
}
