import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbComponent } from './thumb.component';

describe('ThumbComponent', () => {
  let component: ThumbComponent;
  let fixture: ComponentFixture<ThumbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThumbComponent]
    });
    fixture = TestBed.createComponent(ThumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
