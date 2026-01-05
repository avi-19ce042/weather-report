import { Component } from '@angular/core';
import { SearchBoxComponent } from '../../shared/search-box/search-box.component';
import { WeatherService } from '../../service/weather-service.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ThemeService } from '../../service/theme.service';
@Component({
  selector: 'app-home',
  imports: [SearchBoxComponent, RouterOutlet, FontAwesomeModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  faBars = faBars;
  faMoon = faMoon;
  faSun = faSun;
  userName = 'Aviral Sinha';
  isDarkMode = false;
  isSideBarOpen = false;

  constructor(
    private themeService: ThemeService,
    private apiService: WeatherService
  ) {}

  onCitySearch(city: string) {
    this.apiService
      .getCurrentWeather(city)
      .subscribe((res) => console.log('---', res));
  }

  toggleMenu() {
    this.isSideBarOpen = !this.isSideBarOpen;
  }

  // toggleTheme() {
  //   this.isDarkMode = !this.isDarkMode;
  //   document.body.classList.toggle('dark-mode', this.isDarkMode);
  // }
  
  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.themeService.toggleTheme();
  }
}
