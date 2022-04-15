import { Injectable } from "@angular/core";
import { CanLoad } from "@angular/router";

@Injectable()

export class AuthGuardService implements CanLoad {
    user = { admin: false, logged: false }

    canLoad(): boolean {
        if(!this.user.admin){
            window.alert('Acesso Negado')
        }
        return this.user.admin;
    }
}