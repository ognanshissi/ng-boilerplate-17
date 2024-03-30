import {Injectable, signal, WritableSignal} from '@angular/core';
import {concatMap, finalize, Observable, of, tap} from 'rxjs';

@Injectable({providedIn: 'root'})
export class LoadingService {
  public isLoading: WritableSignal<boolean> = signal(false);

  public showLoadingUntilCompleted<T>(obs$: Observable<T>): Observable<T> {
    return of(null).pipe(
      tap(() => this.start()),
      concatMap(() => obs$),
      finalize(() => this.stop())
    );
  }

  public stop(): void {
    this.isLoading.set(false);
  }

  start() {
    this.isLoading.set(true);
  }
}
