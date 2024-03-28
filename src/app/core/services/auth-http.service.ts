import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthHttpService {

  private readonly _http = inject(HttpClient);

  public login() {}

  public logout() {}
}
