import { Pipe, PipeTransform } from "@angular/core";
import { Beer } from "./beer";

@Pipe({
  name: "filterBeer"
})
export class FilterBeerPipe implements PipeTransform {
  regex: RegExp;
  transform(beer: Beer[], search: string, style: string): Beer[] {
    if (beer != undefined) {
      this.regex = new RegExp(search, "i");
      return beer.filter(beer => {
        if (
          style != undefined &&
          style != "" &&
          style != null &&
          style != "All"
        )
          return beer.name.search(this.regex) != -1 && beer.style == style;
        else return beer.name.search(this.regex) != -1;
      }, this);
    } else {
      let empty: Beer[];
      return empty;
    }
  }
}
