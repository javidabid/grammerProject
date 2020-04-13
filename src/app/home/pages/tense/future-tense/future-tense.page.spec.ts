import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FutureTensePage } from './future-tense.page';

describe('FutureTensePage', () => {
  let component: FutureTensePage;
  let fixture: ComponentFixture<FutureTensePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FutureTensePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FutureTensePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
