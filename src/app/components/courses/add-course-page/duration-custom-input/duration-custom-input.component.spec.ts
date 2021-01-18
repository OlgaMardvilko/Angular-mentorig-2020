import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DurationCustomInputComponent } from './duration-custom-input.component';

describe('DurationCustomInputComponent', () => {
  let component: DurationCustomInputComponent;
  let fixture: ComponentFixture<DurationCustomInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DurationCustomInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DurationCustomInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
