import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewleaveIdComponent } from './viewleave-id.component';

describe('ViewleaveIdComponent', () => {
  let component: ViewleaveIdComponent;
  let fixture: ComponentFixture<ViewleaveIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewleaveIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewleaveIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
