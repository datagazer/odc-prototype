import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { publish, refCount } from 'rxjs/operators';
import { ContractService } from '../../services/contract.service';

@Component({
  selector: 'app-tenders',
  templateUrl: './tenders.component.html',
  styleUrls: ['./tenders.component.scss']
})
export class TendersComponent {
  public contracts$: Observable<any[]> = this.$contract.getContracts().pipe(
    publish(),
    refCount()
  );

  constructor(
    private readonly $contract: ContractService
  ) {}

  public calcPaidAmount(contract: any): number {
    return contract.acts.reduce((accumulator, { amount }) => accumulator + amount, 0);
  }

  public calcProgress(contract: any): any[] {
    return contract.acts.sort((a, b) => {
      if (a.documentDate < b.documentDate) {
        return -1;
      }

      if (a.documentDate > b.documentDate) {
        return 1;
      }

      return 0;
    }).reduce((accumulator, { documentDate, amount }) => {
      const previousAmount = accumulator.length > 0 ? accumulator[accumulator.length - 1][1] : 0;

      return [
        ...accumulator,
        [new Date(documentDate).getTime(), previousAmount + amount]
      ];
    }, []);
  }

  public calcTotalProgress(contracts: any[]): number {
    if (!contracts) {
      return;
    }

    return contracts
      .map((contract) => this.calcPaidAmount(contract))
      .reduce((accumulator, amount) => accumulator + amount, 0) / contracts.reduce((accumulator, { amount }) => accumulator + amount, 0);
  }
}
