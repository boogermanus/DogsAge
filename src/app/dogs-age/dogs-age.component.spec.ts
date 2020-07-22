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
});
