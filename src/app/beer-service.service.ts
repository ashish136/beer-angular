import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import { Beer } from "./beer";
const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};
@Injectable({
  providedIn: "root"
})
export class BeerServiceService {
  private beerUrl = "http://starlord.hackerearth.com/beercraft";
  beerObservable;
  beerData: Beer[];
  beerMap = map((response: any) => {
    this.beerObservable = null;
    this.beerData = response;
    return this.beerData;
  });
  constructor(private http: HttpClient) {}

  getBeers(): Observable<Beer[]> {
    if (this.beerData) return of(this.beerData);
    else if (this.beerObservable) {
      return this.beerObservable;
    } else {
      this.beerObservable = this.beerMap(this.http.get<Beer[]>(this.beerUrl));
      return this.beerObservable;
    }
  }
}
