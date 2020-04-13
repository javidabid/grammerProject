import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TagquestionPage } from './tagquestion.page';

describe('TagquestionPage', () => {
  let component: TagquestionPage;
  let fixture: ComponentFixture<TagquestionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagquestionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TagquestionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
