import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppInputColorComponent } from './app-input-color.component';

describe('AppInputColorComponent', () => {
  let component: AppInputColorComponent;
  let fixture: ComponentFixture<AppInputColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppInputColorComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppInputColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
