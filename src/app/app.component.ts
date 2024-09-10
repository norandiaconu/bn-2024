import { Component, HostListener } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'bn-2024';
    vh = 0;
    onHome = false;

    constructor() {
        this.vh = window.innerHeight;
    }

    public scroll(el: HTMLElement): void {
        el.scrollIntoView({ behavior: 'smooth' });
    }

    @HostListener('document:scroll', ['$event'])
    public onViewportScroll() {
        if (window.scrollY < 1000) {
            this.onHome = true;
        }
    }
}
