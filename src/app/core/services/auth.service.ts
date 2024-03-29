import { Injectable } from '@angular/core'
import { DecodedUserData } from '../models/decoded-user-data'

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    public decodedUserData(): DecodedUserData {
        return { firstName: '', uuid: '', fullName: '' }
    }
}
