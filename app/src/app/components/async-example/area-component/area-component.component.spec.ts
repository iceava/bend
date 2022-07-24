import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaComponentComponent } from './area-component.component';

describe('AreaComponentComponent', () => {
  let component: AreaComponentComponent;
  let fixture: ComponentFixture<AreaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
