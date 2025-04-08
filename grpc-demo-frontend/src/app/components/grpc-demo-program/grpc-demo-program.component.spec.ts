import {ComponentFixture, TestBed} from '@angular/core/testing';
import {GrpcDemoProgramComponent} from "./grpc-demo-program.component";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {Observable, of} from "rxjs";

describe('GrpcDemoProgramComponent', () => {
  let fixture: ComponentFixture<GrpcDemoProgramComponent>;
  let component: GrpcDemoProgramComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrpcDemoProgramComponent],
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

    fixture = TestBed.createComponent(GrpcDemoProgramComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
