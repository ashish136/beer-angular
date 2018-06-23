import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BeerListComponent } from "./beer-list/beer-list.component";
import { MyBeersComponent } from "./my-beers/my-beers.component";

const routes: Routes = [
  { path: "", redirectTo: "/beers", pathMatch: "full" },
  { path: "beers", component: BeerListComponent },
  { path: "myBeers", component: MyBeersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
