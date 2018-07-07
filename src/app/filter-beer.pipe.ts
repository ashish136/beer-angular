import { Pipe, PipeTransform } from "@angular/core";
import { Beer } from "./beer";
import { ShareServiceService } from "./share-service.service";
@Pipe({
  name: "filterBeer"
})
export class FilterBeerPipe implements PipeTransform {
  regex: RegExp;
  filterBeer: Beer[];
  constructor(private shareService: ShareServiceService) {}

  transform(beer: Beer[], search: string, style: string): Beer[] {
    if (beer != undefined) {
      if (search != undefined && search != "")
        this.regex = new RegExp(" " + search, "i");
      else this.regex = new RegExp(search, "i");
      this.filterBeer = beer.filter(beer => {
        if (
          style != undefined &&
          style != "" &&
          style != null &&
          style != "All"
        )
          return (
            (" " + beer.name).search(this.regex) != -1 && beer.style == style
          );
        else return (" " + beer.name).search(this.regex) != -1;
      }, this);
      this.shareService.getPaginationLength(this.filterBeer.length);
      return this.filterBeer;
    } else {
      let empty: Beer[];
      this.shareService.getPaginationLength(0);
      return empty;
    }
  }
}
