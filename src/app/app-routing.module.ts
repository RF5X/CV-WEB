import { HomeComponent } from './home/home.component';
import { LoggingComponent } from './logging/logging.component';
import { CompFormComponent } from './compet-pers/comp-form/comp-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompetPersComponent } from './compet-pers/compet-pers.component';
import { EdcFormComponent } from './edc-form/edc-form.component';
import { FormEdcformComponent } from './edc-form/form-edcform/form-edcform.component';
import { ExpProComponent } from './exp-pro/exp-pro.component';
import { FormExpproComponent } from './exp-pro/form-exppro/form-exppro.component';
import { InfPerComponent } from './inf-per/inf-per.component';


const routes: Routes = [
  { path: '', component: InfPerComponent},
  { path: 'informacion', component: InfPerComponent },
  { path: 'experiencia', component: ExpProComponent },
  { path: 'formacion', component: EdcFormComponent },
  { path: 'competencias', component: CompetPersComponent },
  { path: 'addform', component: FormEdcformComponent },
  { path: 'addexp', component: FormExpproComponent },
  { path: 'addcomp', component: CompFormComponent },
  { path: 'logeo', component: LoggingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

