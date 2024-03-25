import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleriaBasicDemoComponent } from './galleria-basic-demo.component';

describe('GalleriaBasicDemoComponent', () => {
  let component: GalleriaBasicDemoComponent;
  let fixture: ComponentFixture<GalleriaBasicDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalleriaBasicDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GalleriaBasicDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
