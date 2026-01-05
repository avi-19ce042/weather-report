import { Injectable } from '@angular/core';
import { env } from '../../environment'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = env.weatherUrl;
  private apiKey = env.apiKey;
  private iconUrl = env.iconUrl;

  constructor( private http: HttpClient) { }

  getCurrentWeather(city: string) {
    return this.http.get(`${this.apiUrl}/weather?q=${city}&appid=${this.apiKey}&units=metric`);
  }

  getWeatherIcon(code: string) {
    return `${this.iconUrl}/${code}@4x.png`;
  }
}
