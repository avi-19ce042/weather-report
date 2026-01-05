import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityStoreService {

  private citySubject = new BehaviorSubject<string[]>(this.loadCities());
  cities$ = this.citySubject.asObservable();

  constructor() { }

  addCity(city: string) {
    const cities = this.citySubject.value;
    if (!cities.includes(city)) {
      const updated = [...cities, city];
      this.citySubject.next(updated);
      localStorage.setItem('cities', JSON.stringify(updated));
    }
  }

  deleteCity(city: string) {
    const updated = this.citySubject.value.filter(c => c!== city);
    this.citySubject.next(updated);
    localStorage.setItem('cities', JSON.stringify(updated));
  }

  private loadCities(): string[] {
    return JSON.parse(localStorage.getItem('cities') || '[]');
  }
}
