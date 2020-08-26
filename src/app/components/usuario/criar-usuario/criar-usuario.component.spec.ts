import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule, setupTestingRouter } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { CriarUsuarioComponent } from './criar-usuario.component';
import { UsuarioService } from '../usuario.service';

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
    const userService = fixture.debugElement.injector.get(UsuarioService);
    return { fixture, app, userService };
  }


  it('should create the app', () => {
    const app = setup();
    expect(app).toBeTruthy();
  });

  it('should have a user', () => {
    const app = setup();
    expect(app.app.usuario).toBeTruthy()
  })
  
  it('should display the same name as user name', () => {
    const app = setup();
    app.fixture.detectChanges();
    const compile = app.fixture.debugElement.nativeElement;
    const userName = compile.querySelector('name');
    expect(app.app.usuario.name).toEqual(userName)
  })

  it('should display the same email as user email', () => {
    const app = setup();
    app.fixture.detectChanges();
    const compile = app.fixture.debugElement.nativeElement;
    const userEmail = compile.querySelector('email');
    expect(app.app.usuario.email).toEqual(userEmail)
  })

  it('should display the same cpf as user cpf', () => {
    const app = setup();
    app.fixture.detectChanges();
    const compile = app.fixture.debugElement.nativeElement;
    const userCpf = compile.querySelector('cpf');
    expect(app.app.usuario.cpf).toEqual(userCpf)
  })

  it('should display the same phone as user phone', () => {
    const app = setup();
    app.fixture.detectChanges();
    const compile = app.fixture.debugElement.nativeElement;
    const userPhone = compile.querySelector('phone');
    expect(app.app.usuario.phone).toEqual(userPhone)
  })
});
