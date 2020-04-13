import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TensePage } from './tense.page';

describe('TensePage', () => {
  let component: TensePage;
  let fixture: ComponentFixture<TensePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TensePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TensePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
