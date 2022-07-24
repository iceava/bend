import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThingComponentComponent } from './thing-component.component';

describe('ThingComponentComponent', () => {
  let component: ThingComponentComponent;
  let fixture: ComponentFixture<ThingComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThingComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
