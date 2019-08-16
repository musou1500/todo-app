import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelListPage } from './label-list.page';

describe('LabelListPage', () => {
  let component: LabelListPage;
  let fixture: ComponentFixture<LabelListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
