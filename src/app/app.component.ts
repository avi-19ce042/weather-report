import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherService } from './service/weather-service.service';
import { HomeComponent } from './pages/home/home.component';
import { ThemeService } from './service/theme.service';

@Component({
  selector: 'app-root',
  imports: [ HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'weather-report';
  constructor(private themeService: ThemeService) {}
  
    ngOnInit(): void {
    this.themeService.initTheme();
  }
}
