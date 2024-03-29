import {Injectable} from '@angular/core'
import {DecodedUserData} from '../models/decoded-user-data'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public decodedUserData(): DecodedUserData {
    return {firstName: '', uuid: '', fullName: ''}
  }

  /**
   * Return the access_token
   */
  public getAuthToken(): string | undefined {
    return ''
  }
}
