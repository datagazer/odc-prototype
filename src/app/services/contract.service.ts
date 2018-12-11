import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { concatMap, toArray } from 'rxjs/operators';

@Injectable()
export class ContractService {
  constructor(
    private readonly $httpClient: HttpClient
  ) {}

  public getContracts(): Observable<any[]> {
    return this.$httpClient.get<any>('/api/v2/disposers/contracts', {
      params: {
        disposerId: '25901106',
        contractorId: '30731879'
      }
    }).pipe(
      concatMap(({ documents }) => of(...documents)),
      concatMap(({ id }) => this.$httpClient.get<any>(`/api/v2/disposers/contracts/${id}`)),
      toArray()
    );
  }
}
