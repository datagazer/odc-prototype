import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { concatMap, map, take, toArray } from 'rxjs/operators';

@Injectable()
export class ContractService {
  constructor(
    private readonly $httpClient: HttpClient
  ) {}

  public getContracts(): Observable<any[]> {
    return this.$httpClient.get<any>('https://cors-proxy.htmldriven.com/?url=http://api.spending.gov.ua/api/v2/disposers/contracts?disposerId=25901106&contractorId=30731879').pipe(
      map(({ body }) => JSON.parse(body)),
      concatMap(({ documents }) => of(...documents).pipe(take(10))),
      concatMap(({ id }) => this.$httpClient.get<any>(`https://cors-proxy.htmldriven.com/?url=http://api.spending.gov.ua/api/v2/disposers/contracts/${id}`)),
      map(({ body }) => JSON.parse(body)),
      toArray()
    );
  }
}
