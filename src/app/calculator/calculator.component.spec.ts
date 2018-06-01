import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';


import { CalculatorComponent } from './calculator.component';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatorComponent ],
      imports: [
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the calculator component', () => {
    expect(component).toBeTruthy();
  });

  it('should be initialized "operation" ', () => {
    const calculator = component;
    expect(calculator.operation).toBeDefined();
  });
  it('display should be null ', () => {
    const calculator = component;
    expect(calculator.display).toBe('');
  });
  it('activenumber should be null ', () => {
    const calculator = component;
    expect(calculator.activenumber).toBe('');
  });
  it('the method number should display the number passed as param' , () => {
   const calculator = component;
   calculator.number('5');
   expect(calculator.display).toBe('5');
  });
  it('the operator should throw an error if called directly' , () => {
    const calculator = component;
    calculator.operator('x');
    expect(calculator.display).toBe('error!');
  });
  it('the operator should throw an error if called directly' , () => {
    const calculator = component;
    calculator.number('5');
    calculator.operator('x');
    expect(calculator.display).not.toBe('error!');
  });
  it('test whether the DOM is diplaying the number entered', fakeAsync(() => {
    const inputDe = fixture.debugElement.query(By.css('input[name="number"]'));
    const inputEl = inputDe.nativeElement;
    const calculator = component;
    calculator.number('5');
    fixture.detectChanges();
    tick();
    expect(inputEl.value).toBe('5');
  }));
  it('test whether the DOM is clearing the number entered', fakeAsync(() => {
    const inputDe = fixture.debugElement.query(By.css('input[name="number"]'));
    const inputEl = inputDe.nativeElement;
    const calculator = component;
    calculator.number('5');
    calculator.clear();
    fixture.detectChanges();
    tick();
    expect(inputEl.value).toBe('');
  }));

});
