import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JeuxCharlyComponent } from './jeux-charly.component';

describe('JeuxCharlyComponent', () => {
  let component: JeuxCharlyComponent;
  let fixture: ComponentFixture<JeuxCharlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JeuxCharlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JeuxCharlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
