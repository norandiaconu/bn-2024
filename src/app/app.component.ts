import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'bn-2024';
    days = 0;
    hours = 0;
    minutes = 0;
    seconds = 0;

    constructor() {
        const countDownDate = new Date('Nov 16, 2024 15:00:00').getTime();
        setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now;
            this.days = Math.floor(distance / 86400000);
            this.hours = Math.floor((distance % 86400000) / 3600000);
            this.minutes = Math.floor((distance % 3600000) / 60000);
            this.seconds = Math.floor((distance % 60000) / 1000);
        }, 1000);
    }

    public scroll(el: HTMLElement): void {
        el.scrollIntoView({ behavior: 'smooth' });
    }
}
