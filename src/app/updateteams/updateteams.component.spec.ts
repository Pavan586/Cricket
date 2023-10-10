import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateteamsComponent } from './updateteams.component';

describe('UpdateteamsComponent', () => {
  let component: UpdateteamsComponent;
  let fixture: ComponentFixture<UpdateteamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateteamsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateteamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
