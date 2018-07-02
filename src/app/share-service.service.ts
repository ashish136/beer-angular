import { Injectable, Output, EventEmitter } from "@angular/core";

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
    this.changeLength.emit(len);
  }
}
