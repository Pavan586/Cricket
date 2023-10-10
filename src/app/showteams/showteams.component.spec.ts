import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowteamsComponent } from './showteams.component';

describe('ShowteamsComponent', () => {
  let component: ShowteamsComponent;
  let fixture: ComponentFixture<ShowteamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowteamsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowteamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
