import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TendersComponent } from './scenes/tenders/tenders.component';

const routes: Routes = [
  {
    path: 'tenders',
    component: TendersComponent
  },

  { path: '**', redirectTo: 'tenders' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],

  exports: [RouterModule]
})
export class AppRoutingModule {}
