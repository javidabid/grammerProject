import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GerundPage } from './gerund.page';

describe('GerundPage', () => {
  let component: GerundPage;
  let fixture: ComponentFixture<GerundPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerundPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GerundPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
