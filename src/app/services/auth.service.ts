import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, mapTo, tap } from 'rxjs/operators'
import { Tokens } from '../models/Tokens';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';
  private loggedUser: string;

  config = {
    apiUrl: "http://localhost:54904/api/users"
  }

  constructor(private http: HttpClient) { }

  login(user: {username: string, password: string}) : Observable<boolean> {
    return this.http.post<any>(`${this.config.apiUrl}/signin`, user)
      .pipe(
        tap(tokens => this.doLoginUser(user.username, tokens)),
        mapTo(true),
        catchError(error => {
          console.log(error)
          alert(error.error);
          return of(false);
        })
      )
  }

  private doLoginUser(username: string, tokens: Tokens) {
    this.loggedUser = username;
    this.storeTokens(tokens);
  }

  private storeTokens(tokens: Tokens) {
    localStorage.setItem(this.JWT_TOKEN, tokens.jwt);
    localStorage.setItem(this.REFRESH_TOKEN, tokens.refreshToken);
  }

  logout() {
    return this.http.post<any>(`${this.config.apiUrl}/logout`, {
      'refreshToken' : this.getRefreshToken()
    }).pipe(
      tap(() => this.doLogoutUser()),
      mapTo(true),
      catchError(error => {
        alert(error.error);
        return of(false);
      })
    )
  }

  private doLogoutUser() {
    this.loggedUser = null;
    this.removeTokens();
  }

  private removeTokens() {
    localStorage.removeItem(this.JWT_TOKEN);
    localStorage.removeItem(this.REFRESH_TOKEN);
  }

  refreshToken() {
    console.log("TRYING TO REFRESH TOKEN")
    return this.http.post<any>(`${this.config.apiUrl}/refresh`, {
      'refreshToken' : this.getRefreshToken()
    }).pipe(tap((tokens: Tokens) => {
      this.storeJwtToken(tokens.jwt);
    }))
  }

  private getRefreshToken() {
    return localStorage.getItem(this.REFRESH_TOKEN);
  }

  getJwtToken() {
    return localStorage.getItem(this.JWT_TOKEN);
  }

  private storeJwtToken(jwt: string) {
    localStorage.setItem(this.JWT_TOKEN, jwt);
  }

  isLoggedIn() {
    return !!this.getJwtToken();
  }
}
