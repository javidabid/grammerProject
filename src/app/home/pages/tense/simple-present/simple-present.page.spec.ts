import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SimplePresentPage } from './simple-present.page';

describe('SimplePresentPage', () => {
  let component: SimplePresentPage;
  let fixture: ComponentFixture<SimplePresentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimplePresentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SimplePresentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
