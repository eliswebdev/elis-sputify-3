import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgItemComponent } from './bg-item.component';

describe('BgItemComponent', () => {
  let component: BgItemComponent;
  let fixture: ComponentFixture<BgItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BgItemComponent]
    });
    fixture = TestBed.createComponent(BgItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
