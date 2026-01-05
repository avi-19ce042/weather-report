import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityForcastComponent } from './city-forcast.component';

describe('CityForcastComponent', () => {
  let component: CityForcastComponent;
  let fixture: ComponentFixture<CityForcastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CityForcastComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CityForcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
