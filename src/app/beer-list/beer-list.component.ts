import { Component, OnInit } from "@angular/core";
import { BeerServiceService } from "../beer-service.service";
import { ShareServiceService } from "../share-service.service";
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
  loading: boolean;
  constructor(
    private beerService: BeerServiceService,
    private shareService: ShareServiceService
  ) {
    this.sortOrder = 0;
    this.startIndex = 0;
    this.endIndex = 10;
    this.loading = true;
  }

  ngOnInit() {
    this.getBeers();
    this.shareService.changeList.subscribe(Obj => {
      this.searchBeer = Obj.name;
      this.sortOrder = Obj.order;
      this.selectedStyle = Obj.style;
    });
  }

  getBeers(): void {
    this.beerService.getBeers().subscribe(allBeer => {
      this.beers = allBeer;
      this.loading = false;
      console.log(this.beers);
    });
  }
  addBeer(beer) {
    if (localStorage.myBeers == undefined || localStorage.myBeers == "") {
      let arr = [];
      arr.push(beer);
      localStorage.myBeers = JSON.stringify(arr);
    } else {
      let arr = JSON.parse(localStorage.myBeers);
      arr.push(beer);
      localStorage.myBeers = JSON.stringify(arr);
    }
  }
  pageChange(pageNo: number) {
    this.startIndex = 10 * (pageNo - 1);
    this.endIndex = 10 * (pageNo - 1) + 10;
  }
}
