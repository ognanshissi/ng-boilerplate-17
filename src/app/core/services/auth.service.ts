import {computed, inject, Injectable, signal} from '@angular/core'
import {DecodedUserData} from '@socle/core/models'
import {JwtHelperService} from "@auth0/angular-jwt";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private readonly _router = inject(Router);
  private jwtHelperService = inject(JwtHelperService);
  private readonly _authStateChanged = signal(false);
  private readonly _isAuthenticated = signal(false);
  public isAuthenticated = computed(() => this._isAuthenticated());

  private readonly _permissions = signal<string[]>([]);
  public permissions = computed(() => this._permissions());

  public setAuthLocalStorage(token: string): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('accessToken', token);
      this._isAuthenticated.set(true);
    }
  }

  public clearStorage() {
    if (typeof localStorage !== 'undefined') {
      localStorage.clear();
    }
  }

  /**
   *
   */
  public logout(): void {
    this.clearStorage();
    this._isAuthenticated.set(false);
    this._permissions.set([]);
    this._router.navigate(['/auth', 'login']);
  }

  public getAuthToken(): string | undefined {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem('accessToken') ?? undefined;
    }
    return undefined;
  }

  /**
   * Verify if the access token is still valid
   * @returns - Boolean
   *
   */
  public isExpired(): boolean {
    const token = this.getAuthToken();

    if (!token) {
      return true;
    }
    return this.jwtHelperService.isTokenExpired(token);
  }

  public decodedUserData(): DecodedUserData | undefined {
    const token = this.getAuthToken();

    if (!token) {
      return undefined;
    }
    return this.jwtHelperService.decodeToken(token) as DecodedUserData;
  }

  public setPermissions(permissions: string[]) {
    this._permissions.set(permissions);
  }

  public hasPermissions(permissions: string[]): boolean {
    return this.permissions()?.some((permission) =>
      permissions.includes(permission)
    );
  }
}
