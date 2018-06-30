import { Injectable, Output, EventEmitter } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ShareServiceService {
  @Output() changeList: EventEmitter<boolean> = new EventEmitter();
  constructor() {}
  setParams(Obj: any) {
    this.changeList.emit(Obj);
  }
}
