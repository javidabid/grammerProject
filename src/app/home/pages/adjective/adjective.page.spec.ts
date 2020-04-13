import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdjectivePage } from './adjective.page';

describe('AdjectivePage', () => {
  let component: AdjectivePage;
  let fixture: ComponentFixture<AdjectivePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdjectivePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdjectivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
