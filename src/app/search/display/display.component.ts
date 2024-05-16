import { Component, Input,Output, EventEmitter, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})
export class DisplayComponent implements OnInit  {
  @Input() data : {sets: any[]} = { sets: [] };
  page = 1;
  boosterPack: any[] = [];
  boostersOpened = 'no';
  @Output() boosterOutput = new EventEmitter<string>();

  constructor(private ApiService: ApiService) { }

  ngOnInit() {
    this.boosterOutput.emit(this.boostersOpened);
  }
  
  getEnvironmentColor(color : string[]): string {
    if (color == undefined){
      return '';
    }
    if (color[0] == "U"){
      return '../../assets/U.png'
    }
    else if (color[0] == "B"){
      return '../../assets/B.png'
    }
    else if (color[0] == "R"){
      return '../../assets/R.webp'
    }
    else{
      return '../../assets/G.png'
    }
  }

  preloadImages() {
    this.boosterPack.forEach((card: any) => {
      const img = new Image();
      img.src = card.imageUrl;
    });
  }

  getBoosters(code : string) {
    this.boostersOpened = 'loading';
    this.boosterOutput.emit(this.boostersOpened);
    this.ApiService.getBoosters(code).subscribe(packs => {
      this.boosterPack.push(packs.cards.filter((element: any) => element.types && element.types.includes('Creature')));
      this.boosterPack = this.boosterPack.flat()
      if (this.boosterPack.length < 30){
        this.getBoosters(code);
      }
      else{
        console.log(this.boosterPack);
        this.preloadImages();
        this.page = 1;
        this.boostersOpened = 'yes';
        this.boosterOutput.emit(this.boostersOpened);
      }
    });
  }
}
