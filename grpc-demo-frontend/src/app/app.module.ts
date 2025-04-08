import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { GrpcDemoProgramComponent } from './components/grpc-demo-program/grpc-demo-program.component';
import { GrpcDemoApplicationComponent } from './components/grpc-demo-application/grpc-demo-application.component';
import { UIAngularComponentsModule } from '@universal-robots/ui-angular-components';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { HttpBackend, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import {MultiTranslateHttpLoader} from 'ngx-translate-multi-http-loader';
import { PATH } from '../generated/contribution-constants';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

export const httpLoaderFactory = (http: HttpBackend) =>
    new MultiTranslateHttpLoader(http, [
        { prefix: PATH + '/assets/i18n/', suffix: '.json' },
        { prefix: './ui/assets/i18n/', suffix: '.json' },
    ]);

@NgModule({
    declarations: [
        GrpcDemoProgramComponent,
        GrpcDemoApplicationComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        UIAngularComponentsModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: { provide: TranslateLoader, useFactory: httpLoaderFactory, deps: [HttpBackend] },
            useDefaultLang: false,
        })
    ],
    providers: [],
})

export class AppModule implements DoBootstrap {
    constructor(private injector: Injector) {
    }

    ngDoBootstrap() {
        const grpcdemoprogramComponent = createCustomElement(GrpcDemoProgramComponent, {injector: this.injector});
        customElements.define('funh-grpc-demo-grpc-demo-program', grpcdemoprogramComponent);
        const grpcdemoapplicationComponent = createCustomElement(GrpcDemoApplicationComponent, {injector: this.injector});
        customElements.define('funh-grpc-demo-grpc-demo-application', grpcdemoapplicationComponent);
    }

    // This function is never called, because we don't want to actually use the workers, just tell webpack about them
    registerWorkersWithWebPack() {
        new Worker(new URL('./components/grpc-demo-application/grpc-demo-application.behavior.worker.ts'
            /* webpackChunkName: "grpc-demo-application.worker" */, import.meta.url), {
            name: 'grpc-demo-application',
            type: 'module'
        });
        new Worker(new URL('./components/grpc-demo-program/grpc-demo-program.behavior.worker.ts'
            /* webpackChunkName: "grpc-demo-program.worker" */, import.meta.url), {
            name: 'grpc-demo-program',
            type: 'module'
        });
    }
}

