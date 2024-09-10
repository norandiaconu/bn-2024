import { Component, HostListener, OnChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
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
