import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  setToSearch = '';
  blockToSearch = '';
  apiResult = "none";
  data:{sets: any[]} = { sets: [] };
  error = 0;
  boostersOpened = ''
  constructor(private ApiService: ApiService) { }

  searchCards() {
    if (this.blockToSearch == ""){
      console.log("erro");
      this.error = 1;
    }
    else{
      this.apiResult = "loading";
      this.ApiService.getSets(this.setToSearch, this.blockToSearch).subscribe(data => {
        this.data = data;
        this.apiResult = "done";
        console.log(data);
      });
    }
  }

  changeBooster(booster: string) {
    console.log(booster)
    this.boostersOpened = booster;
  }
}
