import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHerramientasComponent } from './list-herramientas.component';

describe('ListHerramientasComponent', () => {
  let component: ListHerramientasComponent;
  let fixture: ComponentFixture<ListHerramientasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListHerramientasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListHerramientasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
