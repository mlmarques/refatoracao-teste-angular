import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule, setupTestingRouter } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { CriarUsuarioComponent } from './criar-usuario.component';

describe('CriarUsuarioComponent', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, HttpClientTestingModule ],
      declarations: [ CriarUsuarioComponent ]      
    }).compileComponents();

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  }));

  function setup() {
    const fixture = TestBed.createComponent(CriarUsuarioComponent);
    const app = fixture.componentInstance;
    return { fixture, app };
  }


  it('should create the app', () => {
    const app = setup();
    expect(app).toBeTruthy();
  });

  it('should have a user', () => {
    const app = setup();
    expect(app.app.usuario).toBeTruthy()
  })

  // it(`should have as title 'projeto-teste-angular'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('projeto-teste-angular');
  // });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain('projeto-teste-angular app is running!');
  // });
});
