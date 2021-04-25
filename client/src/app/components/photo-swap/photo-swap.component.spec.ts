import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoSwapComponent } from './photo-swap.component';

describe('PhotoSwapComponent', () => {
  let component: PhotoSwapComponent;
  let fixture: ComponentFixture<PhotoSwapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoSwapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoSwapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
