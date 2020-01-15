import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  public isLoading: boolean;

  constructor() { }

  loadingBlock() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 500);
  }

  loadingValue():boolean {
    return this.isLoading;
  }
}
