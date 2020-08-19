import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule, setupTestingRouter } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { ListarUsuarioComponent } from './listar-usuario.component';
import { UsuarioService } from '../usuario.service';

describe('ListarUsuarioComponent', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, HttpClientTestingModule ],
      declarations: [ ListarUsuarioComponent ]      
    }).compileComponents();

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  }));

  function setup() {
    const fixture = TestBed.createComponent(ListarUsuarioComponent);
    const app = fixture.componentInstance;
    const userService = fixture.debugElement.injector.get(UsuarioService);
    return { fixture, app, userService };
  }


  it('should create the app', () => {
    const app = setup();
    expect(app).toBeTruthy();
  });

  it('should have user list', () => {
      const app = setup();
      expect(app.app.usuarios).toBeTruthy();
  });
  
  it('should have the same users as storage', () => {
    const app = setup();
    const storageData = JSON.parse(localStorage.getItem('usuarios'));
    storageData ? expect(app.app.usuarios).toEqual(storageData) : expect(app.app.usuarios).toEqual([]);
  })
});
