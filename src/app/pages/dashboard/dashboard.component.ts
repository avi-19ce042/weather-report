import { Component, OnInit } from '@angular/core';
import { SearchBoxComponent } from '../../shared/search-box/search-box.component';
import { WeatherService } from '../../service/weather-service.service';
import { CityStoreService } from '../../service/city-store.service';
import { AddCityComponent } from '../../shared/add-city/add-city.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CityCardComponent } from '../../shared/city-card/city-card.component';

@Component({
  selector: 'app-dashboard',
  imports: [CityCardComponent, MatDialogModule, MatButtonModule, MatIconModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  cities: string[] = [];
  weatherList: any[] = [];
  currentIndex = 0;
  cardsPerView = 3; // how many cards visible
  cardWidth = 276;

  constructor(
    private dialog: MatDialog,
    private weatherService: WeatherService,
    private cityService: CityStoreService
  ) {}

  ngOnInit() {
    this.cityService.cities$.subscribe((cities) => {
      this.cities = cities;
      this.loadWeather();
    });
  }

  loadWeather() {
    this.weatherList = [];
    this.cities.forEach((city) => {
      this.weatherService.getCurrentWeather(city).subscribe((data) => {
        this.weatherList.push(data);
      });
    });
  }

  onCitySearch(city: string) {
    console.log('-->', city);
    this.weatherService
      .getCurrentWeather(city)
      .subscribe((res) => console.log('---', res));
  }

  openAddCityDialog() {
    this.dialog.open(AddCityComponent, {
      width: '400px',
      disableClose: true,
    });
  }

  get transform(): string {
    const offset = this.currentIndex * this.cardWidth;
    return `translateX(-${offset}px)`;
  }

  next() {
    const maxIndex = this.weatherList.length - this.cardsPerView;
    if (this.currentIndex < maxIndex) {
      this.currentIndex++;
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  get isAtStart(): boolean {
    return this.currentIndex === 0;
  }

  get isAtEnd(): boolean {
    return this.currentIndex >= this.weatherList.length - this.cardsPerView;
  }
}
