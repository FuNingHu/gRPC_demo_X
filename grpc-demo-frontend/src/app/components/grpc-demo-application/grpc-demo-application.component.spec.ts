import {ComponentFixture, TestBed} from '@angular/core/testing';
import {GrpcDemoApplicationComponent} from "./grpc-demo-application.component";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {Observable, of} from "rxjs";

describe('GrpcDemoApplicationComponent', () => {
  let fixture: ComponentFixture<GrpcDemoApplicationComponent>;
  let component: GrpcDemoApplicationComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrpcDemoApplicationComponent],
      imports: [TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader, useValue: {
            getTranslation(): Observable<Record<string, string>> {
              return of({});
            }
          }
        }
      })],
    }).compileComponents();

    fixture = TestBed.createComponent(GrpcDemoApplicationComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
