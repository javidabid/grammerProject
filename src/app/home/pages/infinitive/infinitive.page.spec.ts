import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfinitivePage } from './infinitive.page';

describe('InfinitivePage', () => {
  let component: InfinitivePage;
  let fixture: ComponentFixture<InfinitivePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfinitivePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfinitivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
