import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IntonationPage } from './intonation.page';

describe('IntonationPage', () => {
  let component: IntonationPage;
  let fixture: ComponentFixture<IntonationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntonationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IntonationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
