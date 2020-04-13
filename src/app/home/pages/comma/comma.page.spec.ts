import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CommaPage } from './comma.page';

describe('CommaPage', () => {
  let component: CommaPage;
  let fixture: ComponentFixture<CommaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CommaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
