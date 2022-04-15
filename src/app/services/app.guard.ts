import { Injectable } from "@angular/core";
import { CanActivate, CanLoad } from "@angular/router";

@Injectable()

export class AuthGuardService implements CanLoad, CanActivate {
    user = { admin: false, logged: true }

    canLoad(): boolean {
        if (!this.user.admin) {
            window.alert('Acesso Negado!')
        }
        return this.user.admin;
    }

    canActivate(): boolean {
        if (!this.user.logged) {
            window.alert('Você não está logado!')
        }
        return this.user.logged;
    }
}