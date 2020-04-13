import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PerfectTensePage } from './perfect-tense.page';

describe('PerfectTensePage', () => {
  let component: PerfectTensePage;
  let fixture: ComponentFixture<PerfectTensePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfectTensePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PerfectTensePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
