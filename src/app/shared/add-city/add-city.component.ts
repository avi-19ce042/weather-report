import { afterNextRender, Component } from '@angular/core';
import { CityStoreService } from '../../service/city-store.service';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { WeatherService } from '../../service/weather-service.service';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'add-city',
  imports: [
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './add-city.component.html',
  styleUrl: './add-city.component.scss',
})
export class AddCityComponent {
  cityControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);

  constructor(
    private weatherService: WeatherService,
    private dialogRef: MatDialogRef<AddCityComponent>,
    private cityService: CityStoreService,
    private router: Router
  ) {}

  addCity() {
    if (this.cityControl.invalid) return;
    const city = this.cityControl.value!.trim();
    this.weatherService.getCurrentWeather(city).subscribe({
      next: (value) => {
        console.log(value)
        this.cityService.addCity(city);
        this.close();
      },
      error: (err) => {
        console.log(err.error)
        if(err.error.cod == '404'){
          alert('City Not Found')
        } else {
          alert('There might be some issue')
        }
        this.close();
      }
    });
  }

  close() {
    this.dialogRef.close();
  }
}
