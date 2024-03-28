import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {LoadingService} from "@socle/core/services";
import {ROOT_API} from "@socle/config";

@Injectable({
  providedIn: 'root',
})
export abstract class HttpBaseService {
  protected _http = inject(HttpClient);
  protected _loaderService = inject(LoadingService);
  protected apiRoot = inject(ROOT_API);

  protected constructor(protected _resources: string) {}

  update<TRequest = unknown, TResponse = unknown>(
    id: string,
    payload: TRequest
  ): Observable<TResponse> {
    return this._loaderService.showLoadingUntilCompleted(
      this._http.put<TResponse>(
        `${this.apiRoot}/${this._resources}/${id}`,
        payload
      )
    );
  }

  findAll<TResponse = unknown>(): Observable<TResponse[]> {
    return this._http.get<TResponse[]>(`${this.apiRoot}/${this._resources}`);
  }

  add<TRequest = unknown, TResponse = unknown>(
    payload: TRequest
  ): Observable<TResponse> {
    return this._loaderService.showLoadingUntilCompleted<TResponse>(
      this._http.post<TResponse>(`${this.apiRoot}/${this._resources}`, payload)
    );
  }

  findById<TResponse = unknown>(id: string): Observable<TResponse> {
    return this._http.get<TResponse>(
      `${this.apiRoot}/${this._resources}/${id}`
    );
  }

  protected delete(id: string): Observable<void> {
    return this._http.delete<void>(`${this.apiRoot}/${this._resources}/${id}`);
  }
}
