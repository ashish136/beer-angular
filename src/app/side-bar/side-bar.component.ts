import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { BeerServiceService } from "../beer-service.service";
import { Beer } from "../beer";
import { timeout } from "q";

@Component({
  selector: "app-side-bar",
  templateUrl: "./side-bar.component.html",
  styleUrls: ["./side-bar.component.css"]
})
export class SideBarComponent implements OnInit {
  @Output() searchEvent: EventEmitter<any> = new EventEmitter<any>();
  beerSearch: string;
  sortOrder: number;
  beers: Beer[];
  autoCompleteBeers: Beer[];
  beerStyle: string[];
  selectedStyle: string;
  searchObj: any;
  constructor(private beerService: BeerServiceService) {
    this.beerSearch = "";
    this.sortOrder = 0;
    this.beerStyle = ["All"];
    this.searchObj = {};
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
    this.searchEvent.emit(this.searchObj);
  };
  sort = function(val) {
    this.sortOrder = val;
    this.setSearchParams({
      name: this.beerSearch,
      order: this.sortOrder,
      style: this.selectedStyle
    });
  };
  showSuggestions(): void {
    let regex: RegExp;
    regex = new RegExp(this.beerSearch, "i");
    this.autoCompleteBeers = this.beers.filter(beer => {
      return beer.name.search(regex) != -1;
    }, this);
  }
  setBeer(name: string): void {
    this.beerSearch = name;
  }
  autocompleteEnd(): void {
    setTimeout(() => {
      this.autoCompleteBeers = [];
    }, 200);
  }
}
