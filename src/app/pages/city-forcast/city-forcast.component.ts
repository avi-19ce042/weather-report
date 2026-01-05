import { Component } from '@angular/core';
import { WeatherService } from '../../service/weather-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-city-forcast',
  imports: [],
  templateUrl: './city-forcast.component.html',
  styleUrl: './city-forcast.component.scss',
})
export class CityForcastComponent {
  weather: any;
  constructor(
    private weatherService: WeatherService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const city = params.get('city')!;
      this.loadWeather(city!);
    });
  }

    loadWeather(city: string) {
      this.weatherService.getCurrentWeather(city).subscribe((data) => {
        console.log(data);
        this.weather = data;
      });
  }

  get iconUrl(): string {
    return this.weatherService.getWeatherIcon(this.weather.weather[0].icon);
  }
}
