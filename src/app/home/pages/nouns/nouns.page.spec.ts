import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NounsPage } from './nouns.page';

describe('NounsPage', () => {
  let component: NounsPage;
  let fixture: ComponentFixture<NounsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NounsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NounsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
