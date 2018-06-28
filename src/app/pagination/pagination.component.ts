import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { BeerServiceService } from "../beer-service.service";

@Component({
  selector: "app-pagination",
  templateUrl: "./pagination.component.html",
  styleUrls: ["./pagination.component.css"]
})
export class PaginationComponent implements OnInit {
  @Output() pageChangeEvent: EventEmitter<any> = new EventEmitter<any>();
  page: number;
  length: number;
  constructor(private beerService: BeerServiceService) {
    this.page = 1;
  }

  ngOnInit() {
    this.calcParameter();
  }
  changePage(pageNo: number) {
    this.pageChangeEvent.emit(pageNo);
  }
  calcParameter() {
    this.beerService.getBeers().subscribe(allBeer => {
      this.length = allBeer.length;
    });
  }
}
