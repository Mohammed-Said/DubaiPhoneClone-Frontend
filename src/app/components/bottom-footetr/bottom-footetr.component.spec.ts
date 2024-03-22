import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomFootetrComponent } from './bottom-footetr.component';

describe('BottomFootetrComponent', () => {
  let component: BottomFootetrComponent;
  let fixture: ComponentFixture<BottomFootetrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottomFootetrComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BottomFootetrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
