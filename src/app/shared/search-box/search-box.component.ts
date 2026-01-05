import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { Router } from '@angular/router';

@Component({
  selector: 'search-box',
  imports: [ ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatIconModule ],
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.scss'
})
export class SearchBoxComponent {
  searchControl = new FormControl('');
  // @Output() citySelected = new EventEmitter<string>();
  constructor(private router: Router) {}

  submitCity() {
    // console.log(this.searchControl.value)

    if (!this.searchControl.value) {
      console.log('fail')
      return;
    }
    const city = this.searchControl.value;
    this.router.navigate(['/city-forcast', city]);
    // this.citySelected.emit(this.searchControl.value);
  }
}
