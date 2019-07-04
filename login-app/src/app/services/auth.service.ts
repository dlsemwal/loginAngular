import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { decode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private message: string;

  constructor(private router: Router) { }
  clear(): void {
    localStorage.clear()
  }
  isTokenExpired(): boolean {
    return false
  }
  isAuthenticated(): boolean {
    return localStorage.getItem('token') != null && this.isTokenExpired()
  }

  login(): void {
    localStorage.setItem('token', `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.
    eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1MzMyNzM5NjksImV4cCI6MTU2ND
    gxMDAwNSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoiVGVzdCBHdWFyZCIsIkdpdmVu
    TmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXB
    sZS5jb20iLCJyb2xlIjoiQWRtaW4ifQ.rEkg53_IeCLzGHlmaHTEO8KF5BNfl6NEJ8w-VEq2PkE`)
    this.router.navigate(["/dashboard"])
  }

  logout(): void {
    this.clear()
    this.router.navigate(['/login'])
  }
  decode() {
    return decode(localStorage.getItem('token'))
  }
}
