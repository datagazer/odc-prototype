import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@datagazer/layout';
import { StructureModule } from '@datagazer/structure';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { RootComponent } from './components/root.component';
import { LineChartDirective } from './directives/line-chart.directive';
import { TendersComponent } from './scenes/tenders/tenders.component';
import { ContractService } from './services/contract.service';

@NgModule({
  imports: [
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatExpansionModule,
    MatProgressBarModule,
    MatTableModule,
    LayoutModule,
    StructureModule,
    AppRoutingModule
  ],

  declarations: [
    RootComponent,
    HeaderComponent,
    LineChartDirective,
    TendersComponent
  ],

  providers: [
    ContractService,

    { provide: LOCALE_ID, useValue: 'uk' }
  ],

  bootstrap: [RootComponent]
})
export class AppModule {}
