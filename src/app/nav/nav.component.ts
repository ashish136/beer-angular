import { Component, OnInit } from "@angular/core";
import { BeerServiceService } from "../beer-service.service";
import { ShareServiceService } from "../share-service.service";
import { Beer } from "../beer";
@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit {
  public isCollapsed = false;
  beers: Beer[];
  beerStyle: string[];
  beerSearch: string;
  autoCompleteBeers: Beer[];
  searchObj: any;
  constructor(
    private beerService: BeerServiceService,
    private shareService: ShareServiceService
  ) {
    this.beerStyle = ["All"];
    this.beerSearch = "";
    this.searchObj = {};
    this.searchObj.style="All";
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
  setSearchParams = function(op: number, val: any) {
    if (op == 1) this.searchObj.order = val;
    else if (op == 2) this.searchObj.name = val;
    else if (op == 3) this.searchObj.style = val;
    this.searchObj.order =
      this.searchObj.order == undefined ? 0 : this.searchObj.order;
    this.shareService.setParams(this.searchObj);
  };
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
