import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { SideBarComponent } from "./side-bar/side-bar.component";
import { BeerListComponent } from "./beer-list/beer-list.component";
import { MyBeersComponent } from "./my-beers/my-beers.component";
import { AppRoutingModule } from ".//app-routing.module";
import { FilterBeerPipe } from "./filter-beer.pipe";
import { FormsModule } from "@angular/forms";
import { SortBeerPipePipe } from "./sort-beer-pipe.pipe";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { PaginationComponent } from "./pagination/pagination.component";
@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    BeerListComponent,
    MyBeersComponent,
    FilterBeerPipe,
    SortBeerPipePipe,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
