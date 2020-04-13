import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdverbPage } from './adverb.page';

describe('AdverbPage', () => {
  let component: AdverbPage;
  let fixture: ComponentFixture<AdverbPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdverbPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdverbPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
