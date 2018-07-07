import { Component, OnInit } from "@angular/core";
import { Observable, interval } from "rxjs";
import { Beer } from "../beer";
@Component({
  selector: "app-my-beers",
  templateUrl: "./my-beers.component.html",
  styleUrls: ["./my-beers.component.css"]
})
export class MyBeersComponent implements OnInit {
  myBeers: Beer[];
  constructor() {}

  ngOnInit() {
    this.getMyBeers();
  }
  getMyBeers() {
    if (localStorage.myBeers != undefined && localStorage.myBeers != "")
      this.myBeers = JSON.parse(localStorage.myBeers);
  }
}
