import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DogsAgeComponent } from './dogs-age.component';
import { FormBuilder } from '@angular/forms';

describe('DogsAgeComponent', () => {
  let component: DogsAgeComponent;
  let fixture: ComponentFixture<DogsAgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogsAgeComponent ],
      providers: [FormBuilder]
    })
    .compileComponents();
  }));

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
});
