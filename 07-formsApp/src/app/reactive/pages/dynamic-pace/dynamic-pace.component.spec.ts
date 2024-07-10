import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicPaceComponent } from './dynamic-pace.component';

describe('DynamicPaceComponent', () => {
  let component: DynamicPaceComponent;
  let fixture: ComponentFixture<DynamicPaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DynamicPaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicPaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
