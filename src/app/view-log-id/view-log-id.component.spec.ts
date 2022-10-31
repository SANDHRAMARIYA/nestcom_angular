import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLogIdComponent } from './view-log-id.component';

describe('ViewLogIdComponent', () => {
  let component: ViewLogIdComponent;
  let fixture: ComponentFixture<ViewLogIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewLogIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewLogIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
