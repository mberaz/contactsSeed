import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let url: string = state.url;
        let page: number = route.queryParams.page;
        let testNumber: number = route.data.testNumber
        return this.checkLogin(url, testNumber, page);
    }

    checkLogin(url: string, testNumber: number, page: number): boolean {
        console.log(`string text ${url} string text, number : ${testNumber}, page: ${page}`);
        return true;

        // Navigate to the login page with extras
        // this.router.navigate(['/login']);
        // return false;
    }
}