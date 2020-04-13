import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PhoneticsPage } from './phonetics.page';

describe('PhoneticsPage', () => {
  let component: PhoneticsPage;
  let fixture: ComponentFixture<PhoneticsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneticsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PhoneticsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
