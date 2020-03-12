import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TurnoffPage } from './turnoff.page';

describe('TurnoffPage', () => {
  let component: TurnoffPage;
  let fixture: ComponentFixture<TurnoffPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurnoffPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TurnoffPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
