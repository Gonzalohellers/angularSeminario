import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCarritoComponenteComponent } from './app-carrito-componente.component';

describe('AppCarritoComponenteComponent', () => {
  let component: AppCarritoComponenteComponent;
  let fixture: ComponentFixture<AppCarritoComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppCarritoComponenteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppCarritoComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
