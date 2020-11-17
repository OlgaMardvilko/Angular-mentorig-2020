import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { UserAuthorizationComponent } from './user-authorization.component';

describe('UserAuthorizationComponent', () => {
  let component: UserAuthorizationComponent;
  let fixture: ComponentFixture<UserAuthorizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAuthorizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAuthorizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit logIn once clicked', () => {
    const spy = spyOn(component, 'logIn');
    const buttonLogIn = fixture.debugElement.query(By.css('.logIn-btn'));

    buttonLogIn.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(spy).toHaveBeenCalled();
  });

  it('should log message when call logIn', () => {
    const consoleSpy = spyOn(console, 'log');

    component.logIn();

    expect(consoleSpy).toHaveBeenCalled();
  });

  it('should emit logOut once clicked', () => {
    const spy = spyOn(component, 'logOut');
    const buttonLogOut = fixture.debugElement.query(By.css('.logOut-btn'));

    buttonLogOut.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(spy).toHaveBeenCalled();
  });

  it('should log message when call logOut', () => {
    const consoleSpy = spyOn(console, 'log');

    component.logOut();

    expect(consoleSpy).toHaveBeenCalled();
  });
});
