import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalizationService {
  private isArabic: BehaviorSubject<boolean>;
  constructor() {
    this.isArabic = new BehaviorSubject<boolean>(false);
    if (localStorage.getItem('language') ==='ar')
    this.isArabic = new BehaviorSubject<boolean>(true);
  }
  get IsArabic(): Observable<boolean> {
    return this.isArabic.asObservable();
  }
  setLanguage(isArabic: boolean) {
    this.isArabic.next(isArabic);
    this.SaveInMemory();
  }
  private SaveInMemory(){
    localStorage.setItem('language', this.isArabic.value?'ar':'en');
  }
  getLanguage(): string {
    return localStorage.getItem('language') ?? 'en' ;
  }
}
