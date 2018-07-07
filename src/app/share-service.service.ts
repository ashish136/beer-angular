import { Injectable, Output, EventEmitter } from "@angular/core";
import { timeout } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ShareServiceService {
  @Output() changeList: EventEmitter<any> = new EventEmitter();
  @Output() changeLength: EventEmitter<number> = new EventEmitter();
  constructor() {}
  setParams(Obj: any) {
    this.changeList.emit(Obj);
  }
  getPaginationLength(len: number) {
    setTimeout(() => this.changeLength.emit(len), 1);
  }
}
