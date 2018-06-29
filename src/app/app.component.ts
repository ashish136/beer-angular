import { Component, OnInit } from "@angular/core";
import { BeerServiceService } from "./beer-service.service";
import { Beer } from "./beer";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  public isCollapsed = false;
  beers: Beer[];
  beerStyle: string[];
  beerSearch: string;
  autoCompleteBeers: Beer[];
  constructor(private beerService: BeerServiceService) {
    this.beerStyle = ["All"];
    this.beerSearch = "";
  }
  ngOnInit() {
    this.getBeerStyle();
  }
  getBeerStyle(): void {
    this.beerService.getBeers().subscribe(allBeer => {
      this.beers = allBeer;
      let temp: any = {};
      for (let i in this.beers) {
        if (this.beers[i].style in temp) continue;
        else {
          temp[this.beers[i].style] = true;
          this.beerStyle.push(this.beers[i].style);
        }
      }
    });
  }
  showSuggestions(): void {
    let regex: RegExp;
    regex = new RegExp(this.beerSearch, "i");
    this.autoCompleteBeers = this.beers.filter(beer => {
      return beer.name.search(regex) != -1;
    }, this);
  }
  autocompleteEnd(): void {
    setTimeout(() => {
      this.autoCompleteBeers = [];
    }, 200);
  }
}
