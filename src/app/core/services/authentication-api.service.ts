import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {LoginRequest, LoginResponse} from "@socle/core/models";
import {Observable, tap} from "rxjs";
import {ROOT_API} from "@socle/config";
import {AuthService, LoadingService} from "@socle/core/services";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationApiService {

  private readonly _http = inject(HttpClient);
  private readonly API_ROOT = inject(ROOT_API);
  private readonly _authService = inject(AuthService);
  private readonly _loadingService = inject(LoadingService);

  public login(payload: LoginRequest): Observable<LoginResponse> {
    return this._http.post<LoginResponse>(`${this.API_ROOT}/auth/login`, payload).pipe(
      tap(result => this._authService.setAuthLocalStorage(result.accessToken))
    );
  }


  /**
   * Logout api
   */
  public logout(): Observable<void> {
    const accessToken = this._authService.getAuthToken();
    return this._loadingService.showLoadingUntilCompleted(this._http.get<void>(`${this.API_ROOT}/auth/logout`, {
        params: {
          accessToken: accessToken ?? ''
        }
      })
    ).pipe(
      tap(() => {
        this._authService.logout();
      })
    )
  }
}
