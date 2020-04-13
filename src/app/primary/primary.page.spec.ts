import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrimaryPage } from './primary.page';

describe('PrimaryPage', () => {
  let component: PrimaryPage;
  let fixture: ComponentFixture<PrimaryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimaryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrimaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
