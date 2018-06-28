import { Component, OnInit } from "@angular/core";
import { BeerServiceService } from "../beer-service.service";
import { SideBarComponent } from "../side-bar/side-bar.component";
import { Beer } from "../beer";

@Component({
  selector: "app-beer-list",
  templateUrl: "./beer-list.component.html",
  styleUrls: ["./beer-list.component.css"]
})
export class BeerListComponent implements OnInit {
  beers: Beer[];
  searchBeer: string;
  sortOrder: number;
  selectedStyle: string;
  startIndex: number;
  endIndex: number;
  constructor(private beerService: BeerServiceService) {
    this.sortOrder = 0;
    this.startIndex = 0;
    this.endIndex = 10;
  }

  ngOnInit() {
    this.getBeers();
  }

  getBeers(): void {
    this.beerService.getBeers().subscribe(allBeer => {
      this.beers = allBeer;
      console.log(this.beers);
    });
  }
  changeBeerList(Obj: any) {
    this.searchBeer = Obj.name;
    this.sortOrder = Obj.order;
    this.selectedStyle = Obj.style;
  }
  pageChange(pageNo: number) {
    this.startIndex = 10 * (pageNo - 1);
    this.endIndex = 10 * (pageNo - 1) + 10;
  }
}
