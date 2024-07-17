import { RouterModule, Routes } from '@angular/router';
import { LogoComponent } from './header/logo/logo.component';
import { NgModule } from '@angular/core';
export const routes: Routes = [{ path: 'logo', component: LogoComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
