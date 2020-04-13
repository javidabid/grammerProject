import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContinueTensePage } from './continue-tense.page';

describe('ContinueTensePage', () => {
  let component: ContinueTensePage;
  let fixture: ComponentFixture<ContinueTensePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContinueTensePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContinueTensePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
