import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DogsAgeComponent } from './dogs-age.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';

describe('DogsAgeComponent', () => {
  let component: DogsAgeComponent;
  let fixture: ComponentFixture<DogsAgeComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ DogsAgeComponent ],
      imports: [
        MatSelectModule,
        MatCardModule,
        ReactiveFormsModule
      ],
      providers: [FormBuilder]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DogsAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate dogs age 0', () => {
    component.calculate();
    expect(component.dogsAge).toBe(0);
  });
  it('should calculate dogs age greater than 0', () => {
    component.age.setValue(1);
    component.calculate();
    expect(component.dogsAge).toBeGreaterThan(0);
  });
  it('should have error min for negative age', () => {
    component.age.setValue(-1);
    expect(component.age.hasError('min')).toBeTrue();
  });
  it('should have error max for age greater than 16', () => {
    component.age.setValue(17);
    expect(component.age.hasError('max')).toBeTrue();
  });
  it('should not error for age 1', () => {
    component.age.setValue(1);
    expect(component.age.valid).toBeTrue();
  });
});
