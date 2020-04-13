import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PastTensePage } from './past-tense.page';

describe('PastTensePage', () => {
  let component: PastTensePage;
  let fixture: ComponentFixture<PastTensePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastTensePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PastTensePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
