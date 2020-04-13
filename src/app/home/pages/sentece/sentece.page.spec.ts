import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SentecePage } from './sentece.page';

describe('SentecePage', () => {
  let component: SentecePage;
  let fixture: ComponentFixture<SentecePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SentecePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SentecePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
