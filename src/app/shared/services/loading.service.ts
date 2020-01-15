import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  public isLoading: boolean;

  constructor() { }

  isShown() {
    this.isLoading = true;
  }

  isHidden() {
    this.isLoading = false;
  }
}
