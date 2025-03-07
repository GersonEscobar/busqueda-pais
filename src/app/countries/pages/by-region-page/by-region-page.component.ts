import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';



@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrls: ['./by-region-page.component.css']
})
export class ByRegionPageComponent implements OnInit {
  public countries: Country[] = [];

  public regiones: Region[] = ['Africa','America','Europe','Oceania','Asia'];
  public selectedRegion?: Region;

  constructor( private countriesService: CountriesService){

  }
  ngOnInit(): void {
    this.countries = this.countriesService.cacheStorage.byRegion.countries
    this.selectedRegion = this.countriesService.cacheStorage.byRegion.region;
  }

  searchByRegion( region: Region):void{
    this.selectedRegion = region;
    this.countriesService.searchRegion( region )
    .subscribe( countries => {
      this.countries = countries;
    })
  }

  

}
