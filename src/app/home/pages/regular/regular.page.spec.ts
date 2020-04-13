import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegularPage } from './regular.page';

describe('RegularPage', () => {
  let component: RegularPage;
  let fixture: ComponentFixture<RegularPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegularPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegularPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
