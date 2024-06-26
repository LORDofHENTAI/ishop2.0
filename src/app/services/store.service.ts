import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class StoreService {

    constructor() { }

    setSelectedShop(data: string): void {
        localStorage.setItem('ishopSelectedShop', data);
    }

    getSelectedShop(): string | null {
        return localStorage.getItem('ishopSelectedShop');
    }
}
