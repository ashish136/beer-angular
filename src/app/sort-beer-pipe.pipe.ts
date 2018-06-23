import { Pipe, PipeTransform } from "@angular/core";
import { Beer } from "./beer";
@Pipe({
  name: "sortBeerPipe"
})
export class SortBeerPipePipe implements PipeTransform {
  regex: RegExp;
  transform(beer: Beer[], sortOrder: number): Beer[] {
    if (beer != undefined) {
      if (sortOrder == undefined || sortOrder == null || sortOrder == 0) {
        return beer;
      } else if (sortOrder == 1) {
        beer.sort(function(a: Beer, b: Beer) {
          return a.abv - b.abv;
        });
        return beer;
      } else if (sortOrder == -1) {
        beer.sort(function(a: Beer, b: Beer) {
          return b.abv - a.abv;
        });
        return beer;
      }
    } else {
      let empty: Beer[];
      return empty;
    }
  }
}
