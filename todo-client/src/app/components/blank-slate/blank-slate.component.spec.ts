import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BlankSlateComponent } from "./blank-slate.component";

describe("BlankSlateComponent", () => {
  let component: BlankSlateComponent;
  let fixture: ComponentFixture<BlankSlateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BlankSlateComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlankSlateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
