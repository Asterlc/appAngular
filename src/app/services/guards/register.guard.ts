import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router";
import { RegisterComponent } from "src/app/demos/reactForms/register/register.component";

@Injectable()
export class RegisterGuard implements CanDeactivate<RegisterComponent> {
    canDeactivate(component: RegisterComponent): boolean {
        if (component.notSavedChanges) {
            return window.confirm('O formulário está incompleto, deseja mesmo sair ?')
        }
        return true;
    }
}