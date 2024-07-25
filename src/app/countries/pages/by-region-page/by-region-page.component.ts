import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrls: ['./by-region-page.component.css']
})
export class ByRegionPageComponent {
  public countries: Country[] = [];

  constructor( private countriesService: CountriesService){

  }

  searchByRegion( region: string):void{
    this.countriesService.searchRegion( region )
    .subscribe( countries => {
      this.countries = countries;
    })
  }

}
