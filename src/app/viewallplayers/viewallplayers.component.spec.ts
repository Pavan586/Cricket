import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallplayersComponent } from './viewallplayers.component';

describe('ViewallplayersComponent', () => {
  let component: ViewallplayersComponent;
  let fixture: ComponentFixture<ViewallplayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewallplayersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewallplayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
