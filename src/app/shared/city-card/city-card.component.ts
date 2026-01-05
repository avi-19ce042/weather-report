import { Component, Input } from '@angular/core';
import { WeatherService } from '../../service/weather-service.service';

@Component({
  selector: 'city-card',
  imports: [],
  templateUrl: './city-card.component.html',
  styleUrl: './city-card.component.scss',
})
export class CityCardComponent {
  @Input() weather: any;

  constructor(private weatherService: WeatherService) {}

get iconUrl(): string {
    return this.weatherService.getWeatherIcon(this.weather.weather[0].icon);
  }

  roundOff(value: string): string {
    return Math.round(+value).toString();
  }
}
