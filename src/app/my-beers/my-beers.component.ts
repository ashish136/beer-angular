import { Component, OnInit } from "@angular/core";
import { Observable, interval } from "rxjs";
@Component({
  selector: "app-my-beers",
  templateUrl: "./my-beers.component.html",
  styleUrls: ["./my-beers.component.css"]
})
export class MyBeersComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    var x: number = 1;

    // This function runs when subscribe() is called
    function sequenceSubscriber(observer) {
      // synchronously deliver 1, 2, and 3, then complete
      setTimeout(() => {
        observer.next();
      }, 5000);

      // unsubscribe function doesn't need to do anything in this
      // because values are delivered synchronously
      return { unsubscribe() {} };
    }

    // Create a new Observable that will deliver the above sequence
    const sequence = new Observable(sequenceSubscriber);

    // execute the Observable and print the result of each notification
    sequence.subscribe({
      next() {
        console.log(x);
      }
    });
    console.log("hi");
  }
}
