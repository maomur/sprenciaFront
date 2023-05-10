import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallToActionSecondComponent } from './call-to-action-second.component';

describe('CallToActionSecondComponent', () => {
  let component: CallToActionSecondComponent;
  let fixture: ComponentFixture<CallToActionSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallToActionSecondComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallToActionSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
