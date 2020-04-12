import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonCComponent } from './button-c.component';

describe('ButtonCComponent', () => {
  let component: ButtonCComponent;
  let fixture: ComponentFixture<ButtonCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
