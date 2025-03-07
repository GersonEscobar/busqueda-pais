import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.css']
})
export class ByCapitalPageComponent implements OnInit{

  public countries: Country[] = [];
  public isLoading: boolean = false;
  public initialValue: string = ''

  constructor(private countriesService: CountriesService){

  }
  ngOnInit(): void {
    this.countries = this.countriesService.cacheStorage.byCapital.countries;
    this.initialValue = this.countriesService.cacheStorage.byCapital.term;
  }

  /* debo suscribirme para ver los cambios */
  searchByCapital( term: string): void{
    this.isLoading = true;

    this.countriesService.searchCapital(term)
    .subscribe( countries =>{
      this.countries = countries;
      this.isLoading = false;
    } );
  }
}
