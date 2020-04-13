import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PartPage } from './part.page';

describe('PartPage', () => {
  let component: PartPage;
  let fixture: ComponentFixture<PartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
