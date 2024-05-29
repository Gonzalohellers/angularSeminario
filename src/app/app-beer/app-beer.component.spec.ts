import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBeerComponent } from './app-beer.component';

describe('AppBeerComponent', () => {
  let component: AppBeerComponent;
  let fixture: ComponentFixture<AppBeerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppBeerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppBeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
