import { LoggingInterceptorService } from './logging/logging-interceptor.service';
import { FormEdcformComponent } from './edc-form/form-edcform/form-edcform.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InfPerComponent } from './inf-per/inf-per.component';
import { ExpProComponent } from './exp-pro/exp-pro.component';
import { EdcFormComponent } from './edc-form/edc-form.component';
import { CompetPersComponent } from './compet-pers/compet-pers.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { FormExpproComponent } from './exp-pro/form-exppro/form-exppro.component';
import { CompFormComponent } from './compet-pers/comp-form/comp-form.component';
import { LoggingComponent } from './logging/logging.component';
import { BarraConfiguracionComponent } from './barra-configuracion/barra-configuracion.component';
import { HomeComponent } from './home/home.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InfPerComponent,
    ExpProComponent,
    EdcFormComponent,
    CompetPersComponent,
    FormEdcformComponent,
    FormExpproComponent,
    CompFormComponent,
    LoggingComponent,
    BarraConfiguracionComponent,
    HomeComponent,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule

  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
