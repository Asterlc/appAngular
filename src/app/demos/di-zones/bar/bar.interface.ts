import { InjectionToken } from "@angular/core";

export class BarOrganization {
    storeID: number;
    storeToken: string;
}

export const BAR_STORE_CONFIG = new InjectionToken<BarOrganization>('BAR_STORE_CONFIG');