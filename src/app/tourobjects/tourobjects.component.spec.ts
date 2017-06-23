import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourobjectsComponent } from './tourobjects.component';

describe('TourobjectsComponent', () => {
  let component: TourobjectsComponent;
  let fixture: ComponentFixture<TourobjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourobjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourobjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
