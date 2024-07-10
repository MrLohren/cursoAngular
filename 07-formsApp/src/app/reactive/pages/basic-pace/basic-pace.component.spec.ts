import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicPaceComponent } from './basic-pace.component';

describe('BasicPaceComponent', () => {
  let component: BasicPaceComponent;
  let fixture: ComponentFixture<BasicPaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BasicPaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicPaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
