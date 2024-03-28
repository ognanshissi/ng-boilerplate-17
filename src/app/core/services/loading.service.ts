import { Injectable, signal } from '@angular/core';
import { Observable, concatMap, finalize, of, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoadingService {
  isLoading = signal(false);

  showLoadingUntilCompleted<T>(obs$: Observable<T>): Observable<T> {
    return of(null).pipe(
      tap(() => this.start()),
      concatMap(() => obs$),
      finalize(() => this.stop())
    );
  }

  stop() {
    this.isLoading.set(false);
  }

  start() {
    this.isLoading.set(true);
  }
}
