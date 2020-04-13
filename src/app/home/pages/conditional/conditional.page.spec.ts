import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConditionalPage } from './conditional.page';

describe('ConditionalPage', () => {
  let component: ConditionalPage;
  let fixture: ComponentFixture<ConditionalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConditionalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConditionalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
